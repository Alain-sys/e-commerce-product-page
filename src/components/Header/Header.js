import React from 'react';
import { useRef } from 'react';
import './Header.css';
import useMediaQuery from '../UseMediaQuery';
import Cart from './Cart';
import iconHamburger from '../../images/icon-menu.svg';
import iconCross from '../../images/icon-close.svg';
import iconLogo from '../../images/logo.svg';
import iconAvatar from '../../images/image-avatar.png';

const Header = ({ newProduct, setNewProduct }) => {
  const menu = useRef(null);
  const menuList = useRef(null);
  const tabletSize = useMediaQuery('(max-width: 768px)');

  return (
    <header>
      <div className="logo-hamburger">
        {tabletSize && (
          <button
            className="hamburger"
            type="button"
            onClick={() => {
              menu.current.classList.toggle('active');
              menuList.current.classList.toggle('active');
            }}>
            <img src={iconHamburger} alt="three grey horizontal bars" />
          </button>
        )}
        <img src={iconLogo} alt="logo of our company written in lowercase with the black color " />
      </div>
      <nav
        ref={menu}
        className="menu"
        onClick={() => {
          menu.current.classList.toggle('active');
          menuList.current.classList.toggle('active');
        }}>
        <ul ref={menuList} className="menu__list" onClick={(e) => e.stopPropagation()}>
          {tabletSize && (
            <button
              className="menu__close"
              type="button"
              onClick={() => {
                menu.current.classList.toggle('active');
                menuList.current.classList.toggle('active');
              }}>
              <img src={iconCross} alt="grey cross" />
            </button>
          )}
          <li className="menu__list__items">Collections</li>
          <li className="menu__list__items">Men</li>
          <li className="menu__list__items">Women</li>
          <li className="menu__list__items">About</li>
          <li className="menu__list__items">Contact</li>
        </ul>
      </nav>
      <div className="user">
        <Cart newProduct={newProduct} setNewProduct={setNewProduct} />
        <img className="user__avatar" src={iconAvatar} alt="avatar for represent user connected" />
      </div>
    </header>
  );
};

export default Header;
