import React from 'react';
import './Header.css';
import Cart from './Cart';
import logo from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';

const Header = () => {
  return (
    <header>
      <div className="menu">
        <img src={logo} alt="logo of our company written in lowercase with the black color " />
        <nav>
          <ul className="menu-list">
            <li className="menu-list__items">Collections</li>
            <li className="menu-list__items">Men</li>
            <li className="menu-list__items">Women</li>
            <li className="menu-list__items">About</li>
            <li className="menu-list__items">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="user">
        <Cart />
        <img className="user__avatar" src={avatar} alt="avatar for represent user connected" />
      </div>
    </header>
  );
};

export default Header;
