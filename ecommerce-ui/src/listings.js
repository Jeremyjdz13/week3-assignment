import React from 'react';

class Listings extends React.Component{
    render(){
        const listings = this.props.data.map((item, idx) => {
            return (
                <div>
                <div key={idx}>
                    <div>
                        <div ><img src={item.image}></img></div>
                        <div>{item.title}</div>
                        <div >{item.houseType}</div>
                        <div >Location: {item.location.city}, {item.location.country}</div>
                        <div >Host: {item.host.name}</div>
                        <div >Payment: ${item.payment.cost}</div>
                        <div>Rating: {item.rating.stars} </div>
                    </div>
                </div>
                <button>Book</button>
                </div>
            );
        })
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