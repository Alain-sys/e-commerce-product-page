import React from 'react';
import iconCart from '../../images/icon-cart.svg';

const Cart = () => {
  return (
    <button className="user__cart" name="cart" type="button">
      <img src={iconCart} alt="grey cart icon" />
    </button>
  );
};

export default Cart;
