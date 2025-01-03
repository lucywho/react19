import { memo } from 'react';
import { sleep } from './utils';
import products from './data';

const Products = memo(function () {
  let productsList = products.map((product, i) => (
    <SlowProduct key={product.id} product={product} />
  ));

  return <ul>{productsList}</ul>;
});

function SlowProduct({ product }: any) {
  sleep(1);
  return <li>Product: {product.name}</li>;
}

export default Products;
