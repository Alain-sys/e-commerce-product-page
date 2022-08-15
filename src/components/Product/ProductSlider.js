import React from 'react';
import iconPrevious from '../../images/icon-previous.svg';
import iconNext from '../../images/icon-next.svg';

const ProductSlider = () => {
  return (
    <div>
      <div>
        <button>
          <img src={iconPrevious} />
        </button>
        <img />
        <button>
          <img src={iconNext} />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
