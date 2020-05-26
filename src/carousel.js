import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () => {
  return (
    <Carousel className="bg-black">
      <Carousel.Item>
        <img
          className="center d-block overflow-hidden"
          src="https://hdqwalls.com/wallpapers/avengers-infinity-war-2018-4k-cq.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="center d-block w-75 overflow-hidden"
          src="https://jackrollreviews.files.wordpress.com/2019/08/msi4htu.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="center d-block w-70"
          src="https://www.desktopbackground.org/download/o/2015/11/27/1048488_interstellar-movie-poster-wallpapers_2880x1800_h.jpg"
          alt="Third slide"
        />
        </Carousel.Item>
    </Carousel>
  );
}


export default ControlledCarousel;