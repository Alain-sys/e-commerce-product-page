import React from 'react';
import './ModalCart.css';
import imageProduct from '../../images/image-product-1-thumbnail.jpg';
import iconCart from '../../images/icon-cart.svg';
import iconDelete from '../../images/icon-delete.svg';
const ModalCart = ({ newProduct, setNewProduct, modalCart }) => {
  return (
    <div className="user__cart">
      <button
        className="user__cart-button"
        onClick={() => {
          modalCart.current.classList.toggle('active');
        }}
        type="button">
        <img src={iconCart} alt="grey cart icon" />
        {newProduct.quantity > 0 && <span className="user__cart-count">{newProduct.quantity}</span>}
      </button>
      <div ref={modalCart} className="modal-cart">
        <p className="modal-cart__name">Cart</p>
        <div className={`${newProduct.quantity > 0 ? 'modal-cart__product' : 'modal-cart__product-empty'}`}>
          {newProduct.quantity > 0 ? (
            <>
              <img
                className="modal-cart__image"
                src={imageProduct}
                alt="white and brown leather shoes placing in middle of orange and beige background"
              />
              <div className="modal-cart__content">
                <p className="modal-cart__product-name">{newProduct.title}</p>
                <div className="modal-cart__price">
                  <p className="modal-cart__price__text">$125.00 x {newProduct.quantity}</p>
                  <p className="modal-cart__price__total">${newProduct.price * newProduct.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setNewProduct({ ...newProduct, quantity: 0 });
                }}
                type="button">
                <img src={iconDelete} alt="grey trash can in icon form" />
              </button>
            </>
          ) : (
            <p className="modal-cart__empty">Your cart is empty</p>
          )}
        </div>
        {newProduct.quantity > 0 && (
          <button className="modal-cart__pay-button" type="button">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalCart;
