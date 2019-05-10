import React from 'react';

class Listings extends React.Component{
    render(){
        const listings = this.props.listing.map((item, idx) => {
            return (
                    <div key={idx}>
                        <span><img src={item['image']}></img></span>
                        <span>{item.title}</span>
                        <span >{item.houseType}</span>
                        <span >Location: {item.location.city}, {item.location.country}</span>
                        <span >Host: {item.host.name}</span>
                        <span >Payment: ${item.payment.cost}</span>
                        <span>Rating: {item.rating.stars} </span>
                        {/* <button onClick={this.props.onBookListings(idx)}>Book</button> */}
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

export default Listings;