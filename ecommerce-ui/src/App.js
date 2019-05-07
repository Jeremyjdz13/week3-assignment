import React, { Component } from 'react';
import ShoppingCart from './shoppingCart.js';
import Listings from './listings.js';
import data from './_data/airbnbs.json';
import './App.css';

console.log(data);

class App extends Component {
  constructor(){
    super();
    this.state = {
      data,
      
      selectedItems:[
  
      ]
    }
  }

  render() {
    return(
      <div className="App">
        <ShoppingCart />
        <hr />
        <Listings data={this.state.data}/>
      </div>
    );
  }
}

export default App;
