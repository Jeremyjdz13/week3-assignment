import React from 'react';
import Listing from './listings.js/index.js'

class Listing extends React.Component{
    render(){
        return (     
            <Listings key={this.props.idx} listingDetail={this.props.item} callBack={this.props.onBookListings}/>
        );       
    }
}

export default Listing;