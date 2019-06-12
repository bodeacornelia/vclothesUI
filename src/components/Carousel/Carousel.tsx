import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const CarouselComponent = ({ carouselImages }) => (
  <Carousel
    dynamicHeight={true}
    showThumbs={false}
    infiniteLoop={true}
    autoPlay={true}
    interval={4000}
    showStatus={false}>
    {
      carouselImages.map((image, index) => (
        <div key={index} style={inlineStyle.imageContainer(image.url)}>
          <p className="legend">{image.legend}</p>
        </div>
      ))
    }
  </Carousel>
);

const inlineStyle = {
  imageContainer: (imageUrl) => ({
    height: 750,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  })
}