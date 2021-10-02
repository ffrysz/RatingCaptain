import React from 'react';
import styles from './App.scss';
import { thisExpression } from '@babel/types';
import CarouselContainer from './components/Carousel/CarouselContainer.js';

class App extends React.Component {

  state = {
    products: [],
  };

  componentDidMount() {

    const adress = 'https://morning-anchorage-42319.herokuapp.com/https://integrations.yaxint.com/api/products';
    const token = '?api_token=70876bc3a88f6644c53af702622edcd8';
    const url = adress + token;

    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };

    fetch(url, options)
      .then(rawResponse => rawResponse.json())
      .then(parsedResponse => this.setState({ products: parsedResponse }));
  }

  render() {
    return (
      <CarouselContainer products={this.state.products} />
    );
  }
}

export default App;


//https://morning-anchorage-42319.herokuapp.com/