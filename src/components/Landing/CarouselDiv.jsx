import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselDiv = ({ images, children }) => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} />
          {children}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselDiv;

// 개별적으로 돌려보기