import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from './CarouselContainer.scss';

const CarouselContainer = ({ products }) => {

  if (products.data) {
    return (
      <div className={styles.carouselBox}>
        <Carousel showArrows={true} autoPlay={true} interval={1000}>
          <div>
            <img src={products.data[0].main_image} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={products.data[1].main_image} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src={products.data[2].main_image} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  } else return (<h1>Waiting for the data from server</h1>);

}

export default CarouselContainer;