import React from 'react';
import Product from './Product.jsx';
import '../styles/components/Products.css';

const Products = ({ products }) => {
    console.log('products', products);
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;