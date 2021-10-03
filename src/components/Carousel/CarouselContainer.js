import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from './CarouselContainer.scss';

const CarouselContainer = ({ products }) => {

  if (products.data) {
    return (
      <Carousel showArrows={true} autoPlay={true} interval={5000} infiniteLoop={true} >
        {products.data.map((product, i) => {
          return (
            <div key={i}>
              <img src={product.main_image} />
              <p className="legend">
                {product.name}<br />
                {product.description}
              </p>
              <div className={styles.hiddenBox}>
                Więcej zdjęć
                <img src={product.images[product.images.length - 1]}></img>
              </div>
            </div>
          );
        })
        }
      </Carousel >
    );
  } else return (<h1>Waiting for the data from server</h1>);

}

export default CarouselContainer;