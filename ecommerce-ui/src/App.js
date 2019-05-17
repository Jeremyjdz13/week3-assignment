import React, { Component } from 'react';
import ShoppingCart from './shoppingCart.js';
import AbnbListings from './listings.js';
import data from './_data/airbnbs.json';
// import Total from './sctotal.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      listing: data,
      selectedListings:  [],
      cartTotals: []
    }
  }

  bookListing = (idx) => {
    const selectedListing = this.state.listing[idx];

    if(this.state.selectedListings.includes(selectedListing)){
      alert('Already selected this listing.');
      return;
    }

    this.setState(prevState => {
      return{
        selectedListings: [...prevState.selectedListings, selectedListing],
        cartTotals: [...prevState.cartTotals, selectedListing.payment.cost]
      };
    });
  }

  deleteListing = (idx) => {
    this.setState(prevState => {
      const selectedListings = [...prevState.selectedListings];
      selectedListings.splice(idx, 1);
      const cartTotals = [...prevState.cartTotals];
      cartTotals.splice(idx, 1);
      return{
          selectedListings,
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
              listing={this.state.selectedListings}
              onDeleteListing={this.deleteListing}
            />
          </div>
          <div className="scTotal">
            <h4>Cart Total</h4>
            <div>Total: ${this.state.cartTotals.reduce((total_Items, price) => total_Items + price, 0)}</div>
          </div>
        </div>
        <hr />
        <AbnbListings 
          listing={this.state.listing}
          onBookListings={this.bookListing}
        />
      </div>
    );
  }
}

export default App;
