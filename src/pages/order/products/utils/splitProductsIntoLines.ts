import { Product } from '../../../../types/types';

export default function splitProductsIntoLines(
  products: Product[],
  numberOfLines: number,
) {
  const ProductsByLine: { [key: number]: Product[] } = {};
  const amountProductsPerLine = Math.ceil(products.length / numberOfLines);

  for (let i = 0; i < numberOfLines; i += 1) {
    const start = i * amountProductsPerLine;
    const end = start + amountProductsPerLine;

    const lineProducts = products.slice(start, end);

    ProductsByLine[i] = lineProducts;
  }

  return ProductsByLine;
}
