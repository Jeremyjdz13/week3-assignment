import React from 'react';

class Listings extends React.Component {
    
    render(){
        return (
            <div>
                {this.props.listing.map((item, idx) => {
                return <div key={idx} className="Listing">
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
                })};
            </div>
        );
    }
}


export default Listings;