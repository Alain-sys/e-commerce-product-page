import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Product from '../Product/Product';

const App = () => {
  return (
    <>
      <Header />
      <Product />
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
