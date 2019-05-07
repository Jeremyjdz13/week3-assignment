import React from 'react';

class ShoppingCart extends React.Component {
    render(){
        // const listings = this.props.data.map((item, idx) => {
        //     return (
        //         <div key={idx}>
        //             <div>
        //                 <div>{item.title}</div>
        //                 <div >{item.houseType}</div>
        //                 <div >Location: {item.location.city}, {item.location.country}</div>
        //                 <div >Payment: ${item.payment.cost}</div>
        //             </div>
        //         </div>                
        //     );
        // })
        return ( 
            <div>
                <h4>ShoppingCart</h4>
                {/* <div>{listings}</div> */}
            </div>
        );
    }
}

export default ShoppingCart;