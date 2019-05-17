import React from 'react';

class ShoppingCartTotal extends React.Component {
    render(){
        const shoppingCartTotal = this.props.listing
            .map((item, idx) => {
                return (
                    <div key={idx}>
                        <div>
                            <div>${item.payment.cost}</div>
                        </div>
                    </div>                
                );   
        });
        return ( 
            <div>
                <h4>Cart Listings</h4>
                <div>{shoppingCartTotal}</div>
            </div>
        );
    }
}

export default ShoppingCartTotal;