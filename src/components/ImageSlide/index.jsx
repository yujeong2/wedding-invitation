/* eslint-disable react/jsx-props-no-spreading,operator-linebreak, react/prop-types */
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';

import photoList from '../../photo';
import closeIcon from '../../assets/icons/close-light.png';

function ImageSlide() {
  const sliderRef = useRef(null);
  const [imageModal, setImageModal] = useState('');

  const settings = {
    initialSlide: Object.keys(photoList).findIndex((o) => o === imageModal),
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    swipeToSlide: true,
    swipe: true,
    arrows: false,
  };

  const handleClickImage = (key) => {
    setImageModal(key);
  };

  const handleClickBackground = () => {
    setImageModal('');
  };

  const handleClickSlider = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="gallery">
        <div className="title">Gallery</div>
        <div className="gallery-grid">
          {Object.keys(photoList).map((photo) => (
            <div
              key={`photo_${photo}`}
              onClick={() => handleClickImage(photo)}
              aria-hidden="true"
            >
              <img src={photoList[photo].src} alt="" />
            </div>
          ))}
        </div>
      </div>
      {imageModal && (
        <div className="modal-wrapper">
          <div
            className="modal-background"
            onClick={handleClickBackground}
            aria-hidden="true"
          >
            <div className="image-modal">
              <div
                className="close-btn"
                onClick={() => setImageModal('')}
                aria-hidden="true"
              >
                <img src={closeIcon} alt="" />
              </div>
              <div
                className="image-slider"
                onClick={handleClickSlider}
                aria-hidden="true"
              >
                <Slider ref={sliderRef} {...settings}>
                  {Object.keys(photoList).map((photo) => (
                    <img
                      src={photoList[photo].src}
                      alt=""
                      key={`photo_${photo}`}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSlide;
