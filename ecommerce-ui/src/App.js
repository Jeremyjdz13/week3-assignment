import React, { Component } from 'react';
import ShoppingCart from './shoppingCart.js';
import Listings from './listings.js';
import data from './_data/airbnbs.json';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      listing: data,
      selectedListings:  []
    }
  }

  // bookListing = (idx) => {
  //   const selectedListing = this.state.listing[idx];
  //   console.log(selectedListing);
  //   if(this.state.selectedListings.includes(selectedListing)){
  //     alert('Already selected this listing.');
  //     return;
  //   }
    
  //   this.setState(prevState => {
  //     return{
  //       selectedListings: [...prevState.selectedListings, selectedListing ] 
  //     };  
  //   });
  // }

  // onDeleteListing = (idx, e) => {
  //   const selectedListings = Object.assign([], this.state.selectedListings);
  //   selectedListings.splice(idx, 1);
  //   this.setState({selectedListing:selectedListings});

    // this.setState(prevState => {
    //   return{
    //     selectedListings: [...prevState.selectedListings].splice(idx, 1)
    //   }
    // })
    // }

  render() {
    return(
      <div className="App">
        <ShoppingCart 
          listing={this.state.selectedListings}
          // onDeleteListing={this.onDeleteListing}
        />
        <hr />
        <Listings 
          listing={this.state.listing}
          // onBookListings={this.bookListing}
        />
      </div>
    );
  }
}

export default App;
