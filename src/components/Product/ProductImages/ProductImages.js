import React from 'react';
import { useRef } from 'react';
import './ProductImages.css';
import ProductSlider from './ProductSlider';

const ProductImages = () => {
  const mainImagesArray = [
    { id: 0, url: '/assets/image-product-1.jpg' },
    { id: 1, url: '/assets/image-product-2.jpg' },
    { id: 2, url: '/assets/image-product-3.jpg' },
    { id: 3, url: '/assets/image-product-4.jpg' },
  ];

  const thumbnailImagesArray = [
    { id: 0, url: '/assets/image-product-1.jpg' },
    { id: 1, url: '/assets/image-product-2.jpg' },
    { id: 2, url: '/assets/image-product-3.jpg' },
    { id: 3, url: '/assets/image-product-4.jpg' },
  ];

  const productModalImages = useRef(null);
  const productCloseButton = useRef(null);

  return (
    <>
      <div className="product-images">
        <ProductSlider
          classNameMainButton="product-images__main-button"
          classNameMainImage="product-images__main-image"
          classNamePrevButton="product-images__previous-button"
          classNameNextButton="product-images__next-button"
          onClick={() => {
            productModalImages.current.classList.toggle('active');
          }}
          mainImagesArray={mainImagesArray}
          thumbnailImagesArray={thumbnailImagesArray}
        />
      </div>
      <div ref={productModalImages} className="product-modal-images">
        <div className="product-modal-slider">
          <button ref={productCloseButton} className="product-modal-slider__close-button" type="button">
            <svg viewBox="0 0 14 15" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#FFFFFF"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <ProductSlider
            classNameMainButton="product-modal-slider__main-button"
            classNameMainImage="product-modal-slider__main-image"
            classNamePrevButton="product-modal-slider__previous-button"
            classNameNextButton="product-modal-slider__next-button"
            onClick={() => {
              return;
            }}
            mainImagesArray={mainImagesArray}
            thumbnailImagesArray={thumbnailImagesArray}
          />
        </div>
      </div>
    </>
  );
};

export default ProductImages;
