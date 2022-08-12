import React from 'react';
import cart from '../../images/icon-cart.svg';

const Cart = () => {
  return (
    <button className="user__cart" name="cart" type="button">
      <img src={cart} alt="icon of a grey cart " />
    </button>
  );
};

export default Cart;
