import React from 'react';
import { useState } from 'react';
import useMediaQuery from '../../../hooks/UseMediaQuery';

const ProductSlider = ({
  classNameSlider,
  classNameMainButton,
  classNameMainImage,
  classNamePrevButton,
  classNameNextButton,
  onClick,
  mainImagesArray,
  thumbnailImagesArray,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    } else {
      return;
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
  const desktopSize = useMediaQuery('(min-width: 769px)');

  return (
    <>
      <div className={classNameSlider}>
        <button className={classNameMainButton} onClick={desktopSize ? onClick : undefined} type="button">
          <img
            className={classNameMainImage}
            src={process.env.PUBLIC_URL + mainImage.url}
            alt="white and brown leather shoes placing in middle of orange and beige background"
          />
        </button>
        <button className={classNamePrevButton} onClick={hanldePrevClick} type="button">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>
        <button className={classNameNextButton} onClick={hanldeNextClick} type="button">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>
      </div>

      {desktopSize && (
        <div className="product-thumbnail">
          {thumbnailImagesArray.map((item, index) => (
            <button
              key={index}
              className={`product-thumbnail__buttons ${currentIndex === index && 'active'}`}
              onClick={() => {
                handleClick(index);
              }}
              type="button">
              <img
                className="product-thumbnail__images"
                src={process.env.PUBLIC_URL + item.url}
                alt="white and brown leather shoes placing in middle of an orange and beige background"
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductSlider;
