import React, { useContext } from 'react';
import {
  Br,
  Cut,
  Line,
  Printer,
  Row,
  Text,
  render,
} from 'react-thermal-printer';
import formatMonetaryValue, {
  formatMonetaryCents,
} from '../helpers/formatMonetaryValue';
import useOrderHandler from './useOrderHandler';
import useOrderPayment from './useOrderPayment';
import useReviewProductHandler from './useReviewProductHandler';
import PrinterContext from '../contexts/printerContext';
import warningMessage from '../helpers/warnMessage';

export default function usePrintOrder() {
  const { port, setPort } = useContext(PrinterContext);
  const { getSelectedProducts } = useOrderHandler();
  const { getTotalOrderPrice } = useOrderPayment();
  const { reviewingProduct } = useReviewProductHandler();

  const selectedProducts = getSelectedProducts();
  const totalOrdersPrice = getTotalOrderPrice();

  const orderProducts = reviewingProduct
    ? [...selectedProducts, reviewingProduct]
    : selectedProducts;

  const Order = (
    <Printer type="epson" width={40}>
      <Br />
      {orderProducts.map(p => (
        <React.Fragment key={`printer-product-${p.id}`}>
          <Row
            left={`${p.amount}x ${p.name}`}
            right={formatMonetaryValue(p.price)}
          />

          {p.selectedExtras.map(extra => (
            <Row
              key={`printer-product-${p.id}-extra-${extra.id}`}
              left={`+ ${extra.name}`}
              right={formatMonetaryValue(extra.price)}
            />
          ))}
          <Br />
        </React.Fragment>
      ))}
      <Br />
      <Line />
      <Br />
      <Text align="right">Total do pedido:</Text>
      <Text align="right" bold size={{ width: 2, height: 2 }}>
        {formatMonetaryCents(totalOrdersPrice * 100)}
      </Text>

      <Cut lineFeeds={2} />
    </Printer>
  );

  const print = async () => {
    const data = await render(Order);

    let currentPort = port;

    if (!currentPort) {
      try {
        currentPort = await window.navigator.serial.requestPort();
        setPort(currentPort);
      } catch {
        warningMessage('Impressão não autorizada');
        return;
      }
    }
    try {
      await currentPort.open({ baudRate: 9600 });
    } catch {
      warningMessage('falha ao abrir porta');
    }

    try {
      const writer = currentPort.writable?.getWriter();

      await writer.ready;
      await writer.write(data);

      writer.releaseLock();
    } catch {
      warningMessage('falha ao imprimir pedido');
    } finally {
      currentPort.close();
    }
  };

  return { print };
}
