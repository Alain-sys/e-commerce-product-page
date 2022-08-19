import React from 'react';
import './Product.css';
import ProductImages from './ProductImages/ProductImages';
import ProductBuy from './ProductBuy/ProductBuy';

const Product = ({ newProduct, setNewProduct }) => {
  return (
    <main className="product">
      <ProductImages />
      <div className="product-details">
        <p className="product-details__company">SNEAKER COMPANY</p>
        <h1 className="product-details__title">Fall Limited Edition Sneakers</h1>
        <p className="product-details__description">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the
          weather can offer.
        </p>
        <div className="product-details__price">
          <div className="product-details__reduction">
            <p className="product-details__price-reduction">$125.00</p>
            <p className="product-details__promotion">50%</p>
          </div>
          <p className="product-details__real-price">$250.00</p>
        </div>
        <ProductBuy newProduct={newProduct} setNewProduct={setNewProduct} />
      </div>
    </main>
  );
};

export default Product;
