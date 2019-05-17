import React from 'react';

class Total extends React.Component {
    render(){
        const sumPropertyValue = (items, props) => items.reduce((a, b) => a + b[props], 0);
       const cart_items = [...this.props.cartTotals];
       const cartTotal = sumPropertyValue(cart_items, 'quantitty');
       
        return ( 
            <div>
                <h4>Cart Total</h4>
                <div>{cartTotal}</div>
            </div>
        );
    }
}

export default Total;


