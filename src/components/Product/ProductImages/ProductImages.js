import React from 'react';
import { useState, useRef } from 'react';
import './ProductImages.css';
import iconPrevious from '../../../images/icon-previous.svg';
import iconNext from '../../../images/icon-next.svg';
import iconCross from '../../../images/icon-close.svg';

const ProductImages = () => {
  const productCrossButton = useRef(null);
  const productPreviousButton = useRef(null);
  const productNextButton = useRef(null);
  const productModalImages = useRef(null);

  const mainImagesArray = [
    { id: 0, url: '/assets/image-product-1.jpg' },
    { id: 1, url: '/assets/image-product-2.jpg' },
    { id: 2, url: '/assets/image-product-3.jpg' },
    { id: 3, url: '/assets/image-product-4.jpg' },
  ];

  const thumbnailImages = [
    { id: 0, url: '/assets/image-product-1.jpg' },
    { id: 1, url: '/assets/image-product-2.jpg' },
    { id: 2, url: '/assets/image-product-3.jpg' },
    { id: 3, url: '/assets/image-product-4.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  const hanldePrevClick = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(mainImagesArray.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const hanldeNextClick = () => {
    if (currentIndex + 1 === mainImagesArray.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  let mainImage = mainImagesArray[currentIndex];

  return (
    <div className="product-images">
      <button ref={productCrossButton} className="product-images__cross-button" type="button">
        <img src={iconCross} alt="grey cross" />
      </button>
      <div className="product-slider">
        <button ref={productPreviousButton} className="product-slider__previous-button" onClick={hanldePrevClick} type="button">
          <img src={iconPrevious} alt="left black arrow" />
        </button>
        <button
          className="product-slider__main-button"
          onClick={() => {
            productModalImages.current.classList.add('active');
          }}
          type="button">
          <img
            className="product-slider__main-image "
            src={process.env.PUBLIC_URL + mainImage.url}
            alt="white and brown leather shoes placing in middle of orange and beige background"
          />
        </button>
        <button ref={productNextButton} className="product-slider__next-button" onClick={hanldeNextClick} type="button">
          <img src={iconNext} alt="right black arrow" />
        </button>
      </div>
      <div className="product-thumbnail">
        {thumbnailImages.map((item, index) => (
          <button key={index} className="product-thumbnail__buttons" onClick={() => handleClick(index)} type="button">
            <img
              className="product-thumbnail__images"
              src={process.env.PUBLIC_URL + item.url}
              alt="white and brown leather shoes placing in middle of an orange and beige background"
            />
          </button>
        ))}
      </div>
      <div ref={productModalImages} className="product-modal-images"></div>
    </div>
  );
};

export default ProductImages;
