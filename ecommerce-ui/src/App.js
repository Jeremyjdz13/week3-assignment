import React, { Component } from 'react';
import ShoppingCart from './shoppingCart.js';
import Listings from './listings.js';
import Data from './_data/airbnbs.json';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      listing: Data,
      shoppingCart:  [],
      cartTotals: []
    }
  }

  bookListing = (idx) => {
    const selectedListing = this.state.listing[idx];
    if(this.state.shoppingCart.includes(selectedListing)){
      alert('Already selected this listing.');
      return;
    }

    this.setState(prevState => {
      return{
        shoppingCart: [...prevState.shoppingCart, selectedListing],
        cartTotals: [...prevState.cartTotals, selectedListing.payment.cost]
      };
    });
  }

  deleteListing = (idx) => {
    this.setState(prevState => {
      const shoppingCart = [...prevState.shoppingCart];
      shoppingCart.splice(idx, 1);
      const cartTotals = [...prevState.cartTotals];
      cartTotals.splice(idx, 1);
      return{
          shoppingCart,
          cartTotals
        };
    });
    
    }

  render() {
    return(
      <div>
        <div className="ShoppingCartContainer">
          <div className="scTitle">
            <h4>ShoppingCart</h4>
          </div>
          <div className="scContent">
            <ShoppingCart 
              shoppingCart={this.state.shoppingCart}
              onDeleteListing={this.deleteListing}
            />
          </div>
          <div className="scTotal">
            <h4>Cart Total</h4>
            <div>Total: ${this.state.cartTotals.reduce((total_Items, price) => total_Items + price, 0)}</div>
          </div>
        </div>
        <hr />
        <Listings
          listing={this.state.listing}
          onBookListings={this.bookListing}
        />
      </div>
    );
  }
}

export default App;
