import React from 'react';
import { PropTypes } from 'prop-types';

class AbnbListings extends React.Component{
    static propTypes = {
        listings: PropTypes.shape( {
            image: PropTypes.string,
            title: PropTypes.string,
            houseType: PropTypes.string,
            location: PropTypes.string,
            payment: PropTypes.number,
            rating: PropTypes.string,
        }) 
    }
    render(){
        const listings = this.props.listing.map((item, idx) => {
            return (
                    <div key={idx} className="Listing">
                        <div className="iContainer">
                            <img src={item['image']}></img>
                        </div>
                        <div className="ListingDetails">
                            <h4>{item.title}</h4>
                            <div >House Type: {item.houseType}</div>
                            <div >Location: {item.location.city}, {item.location.country}</div>
                            <div >Host: {item.host.name}</div>
                            <div >Payment: ${item.payment.cost}</div>
                            <div>Rating: {item.rating.stars} </div>
                            <button className="btn" onClick={() => this.props.onBookListings(idx)}>Book</button>
                        </div>  
                    </div>
            );
        });
   
        return(
            <div>
                <ul>
                    {listings}
                </ul>
            </div>
        );
    }
}

export default AbnbListings;