import "./ProceedToPayment.css"
import React from "react";
import "./ProceedToPayment.css"; // Import the CSS file for styling

const ProceedToPayment = ({ totalAmount }) => {

 
  //  the payment logic here
  const handlePayment = () => {
    //  your payment logic here
    console.log("Payment logic goes here");
  };

  return (
    <div className="proceed-to-payment">
      <h2>Review Your Order</h2>
      <div className="order-details">
        <div className="order-item">
          <p>Subtotal:</p>
          <p>Order amount {totalAmount}</p>
        </div>
        <div className="order-item">
          <p>Shipping Fee:</p>
          <p>Free</p>
        </div>
        <div className="order-item total">
          <h3>Total:</h3>
          <h3>amount {totalAmount}</h3>
        </div>
      </div>

      <div className="payment-methods">
        <h2>Payment Methods</h2>
        {/*  payment method options here */}
        <div className="payment-option">
          <input type="radio" id="creditCard" name="paymentMethod" />
          <label htmlFor="creditCard">Credit Card</label>
        </div>
        <div className="payment-option">
          <input type="radio" id="paypal" name="paymentMethod" />
          <label htmlFor="paypal">PayPal</label>
        </div>
      </div>

      <button onClick={handlePayment} className="payment-button">
        Make Payment
      </button>
    </div>
  );
};

export default ProceedToPayment;
