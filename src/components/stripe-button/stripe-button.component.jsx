import React from "react";
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K1meoSF0WANoJBgsPwLisA4EFzp8UianXrmOY3mK7BJWPHGNWqqwAZi0qLua1PH5G2ZuQ8RYa3DRBjtHjaxxHe900yAgbphO0';

    const onToken = token =>{
        console.log(token);
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        currency="USD"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description= {`your total is $${price}`}
        amount= {priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} 
        />
    );
};


export default StripeCheckoutButton;