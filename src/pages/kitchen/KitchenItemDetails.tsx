import React from 'react';
import { SelectedProduct } from '../../types/types';

export default function KitchenItemDetails({
  product,
}: {
  product: SelectedProduct;
}) {
  return (
    <div key={`ktichen-product-${product.id}`}>
      <p>
        {product.amount}x {product.name}
      </p>
      {product.selectedExtras.map(extra => (
        <p
          key={`ktichen-product-${product.id}-extra-${extra.id}`}
          style={{ marginLeft: '0.5rem' }}
        >
          + {extra.name}
        </p>
      ))}
    </div>
  );
}
