import React from 'react';
import './Product.css';
import iconPrevious from '../../images/icon-previous.svg';
import iconNext from '../../images/icon-next.svg';
import iconCross from '../../images/icon-close.svg';
import imageProductOne from '../../images/image-product-1.jpg';
import imageProductTwo from '../../images/image-product-2.jpg';
import imageProductThree from '../../images/image-product-3.jpg';
import imageProductFour from '../../images/image-product-4.jpg';
import imageProductOneThumbnail from '../../images/image-product-1-thumbnail.jpg';
import imageProductTwoThumbnail from '../../images/image-product-2-thumbnail.jpg';
import imageProductThreeThumbnail from '../../images/image-product-3-thumbnail.jpg';
import imageProductFourThumbnail from '../../images/image-product-4-thumbnail.jpg';

const ProductImages = () => {
  return (
    <div className="product-images">
      <button className="product-images__icon-cross" type="button">
        <img src={iconCross} alt="grey cross" />
      </button>
      <div className="product-slider">
        <button className="product-slider__icon-previous" type="button">
          <img src={iconPrevious} alt="left black arrow" />
        </button>
        <button className="product-slider__main-button" type="button">
          <img
            className="product-slider__main-image"
            src={imageProductOne}
            alt="white and brown leather shoes placing in middle of orange and beige background"
          />
        </button>
        <button className="product-slider__icon-next" type="button">
          <img src={iconNext} alt="right black arrow" />
        </button>
      </div>
      <div className="product-thumbnail">
        <button className="product-thumbnail__buttons" type="button">
          <img
            className="product-thumbnail__images"
            src={imageProductOneThumbnail}
            alt="white and brown leather shoes placing in middle of orange and beige background"
          />
        </button>
        <button className="product-thumbnail__buttons" type="button">
          <img
            className="product-thumbnail__images"
            src={imageProductTwoThumbnail}
            alt="white and brown leather shoes placing in middle of orange and beige background"
          />
        </button>
        <button className="product-thumbnail__buttons" type="button">
          <img
            className="product-thumbnail__images"
            src={imageProductThreeThumbnail}
            alt="white and brown leather shoes placing in middle of orange and beige background"
          />
        </button>
        <button className="product-thumbnail__buttons" type="button">
          <img
            className="product-thumbnail__images"
            src={imageProductFourThumbnail}
            alt="white and brown leather shoes placing in middle of orange and beige background"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
