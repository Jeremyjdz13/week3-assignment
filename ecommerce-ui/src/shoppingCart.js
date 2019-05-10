import React from 'react';

class ShoppingCart extends React.Component {
    render(){
        const shoppingCart = this.props.listing
            .map((item, idx) => {
                return (
                    <div key={idx}>
                        {item.title}
                        <div>
                            <div>{item.title}</div>
                            <div >{item.houseType}</div>
                            <div >Location: {item.location.city}, {item.location.country}</div>
                            <div >Payment: ${item.payment.cost}</div>
                        </div>
                        {/* <button onClick={this.props.onDeleteListing(idx)}>Delete</button> */}
                    </div>                
                );
        })
        return ( 
            <div>
                <h4>ShoppingCart</h4>
                <div>{shoppingCart}</div>
            </div>
        );
    }
}

export default ShoppingCart;