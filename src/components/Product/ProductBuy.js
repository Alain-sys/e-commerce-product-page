import React from 'react';
import iconMinus from '../../images/icon-minus.svg';
import iconPlus from '../../images/icon-plus.svg';
import iconCartWhite from '../../images/icon-cart-white.svg';

const ProductBuy = () => {
  return (
    <div className="product-buy">
      <div className="product-quantity">
        <button className="product-quantity__operator" type="button">
          <img src={iconMinus} alt="orange horizontal bar for represent the minus sign" />
        </button>
        <p>0</p>
        <button className="product-quantity__operator" type="button">
          <img src={iconPlus} alt="orange horizontal and vertical bar for represent the plus sign" />
        </button>
      </div>
      <button className="product-cart" type="button">
        <img src={iconCartWhite} alt="white cart icon" />
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default ProductBuy;
