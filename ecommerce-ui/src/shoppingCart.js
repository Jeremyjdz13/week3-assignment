import React from 'react';

class ShoppingCart extends React.Component {
    render(){
        const shoppingCart = this.props.listing
            .map((item, idx) => {
                return (
                    <div key={idx} className="shoppingCart">
                            <div>{item.title}</div>
                            <div >{item.houseType}</div>
                            <div >Location: {item.location.city}, {item.location.country}</div>
                            <div >Payment: ${item.payment.cost}</div>
                        <button onClick={() => this.props.onDeleteListing(idx)}>Delete</button>
                    </div>                
                );
        })
        return ( 
            <div>
                <div>{shoppingCart}</div>
            </div>
        );
    }
}

export default ShoppingCart;