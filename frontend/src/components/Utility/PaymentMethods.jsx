import React from 'react'
import { FaCcPaypal, FaCcVisa, FaCcApplePay, FaCcAmex } from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <div>
        <div>
          <h5 className="payment-methods">Payment methods</h5>
          <div className="icons">
            <div className="paypal">
              <FaCcPaypal />
            </div>
            <div className="visa">
              <FaCcVisa />
            </div>
            <div className="apple-pay">
              <FaCcApplePay />
            </div>
            <div className="america-express">
              <FaCcAmex />
            </div>
          </div>
        </div>
    </div>
  )
}

export default PaymentMethods