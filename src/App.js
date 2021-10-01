import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';

class App extends React.Component {

  componentDidMount() {

    const options = {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        'api_token': '70876bc3a88f6644c53af702622edcd8',
      },
      // body: JSON.stringify(payload),
    };

    fetch('https://morning-anchorage-42319.herokuapp.com/https://integrations.yaxint.com/api/products', options)
      .then((res) => res.json())
      .then((json) => this.setState({ products: json.results }));
  }

  render() {
    return (
      <h1>DUPA</h1>
    );
  }
}

export default App;


//https://morning-anchorage-42319.herokuapp.com/