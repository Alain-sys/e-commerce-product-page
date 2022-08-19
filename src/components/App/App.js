import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Product from '../Product/Product';

const App = () => {
  const [newProduct, setNewProduct] = useState({
    id: 0,
    title: 'Fall Limited Edition Sneakers',
    price: 125,
    quantity: 0,
  });

  return (
    <>
      <Header newProduct={newProduct} setNewProduct={setNewProduct} />
      <Product newProduct={newProduct} setNewProduct={setNewProduct} />
      <footer className="attribution">
        <p>
          Challenge by {''}
          <a className="github-profile" href="https://www.frontendmentor.io/">
            Frontend Mentor
          </a>
          . Coded by {''}
          <a className="github-profile" href="https://github.com/Alain-sys">
            Alain-sys
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
