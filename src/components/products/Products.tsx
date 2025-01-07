import React, { memo } from 'react';
import { sleep } from './sleep';
import products from './data';

type ProductType = {
  product: {
    id: string;
    name: string;
    description: string;
    material: string;
    price: string;
    department: string;
    quantity: number;
  };
};

const Products: React.FC = memo(function ProductsList() {
  const productsList = products.map((product) => (
    <SlowProduct key={product.id} product={product} />
  ));

  return (
    <>
      <title>React19 App - Products</title>
      <meta name='keywords' content='products, react19' />
      <ul>{productsList}</ul>;
    </>
  );
});

function SlowProduct({ product }: ProductType) {
  sleep(1);
  return <li>Product: {product.name}</li>;
}

export default Products;
