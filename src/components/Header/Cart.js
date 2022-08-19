import React from 'react';
import './Cart.css';
import iconCart from '../../images/icon-cart.svg';
import iconDelete from '../../images/icon-delete.svg';

const Cart = ({ newProduct, setNewProduct }) => {
  return (
    <div className="">
      <button className="user__cart" name="cart" type="button">
        <img src={iconCart} alt="grey cart icon" />
      </button>
      <div className="">
        <p>Cart</p>
        <div>
          {newProduct.quantity === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <img />
              <div>
                <p>{newProduct.title}</p>
                <div>
                  <p>$125.00 x {newProduct.quantity}</p>
                  <p>{newProduct.price * newProduct.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setNewProduct({ ...newProduct, quantity: 0 });
                }}
                type="button">
                <img src={iconDelete} />
              </button>
            </>
          )}
        </div>
        <button type="button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
