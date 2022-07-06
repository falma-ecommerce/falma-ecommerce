import React, {useState, useNavigate} from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalPayment = (props) => {
    const {purchaseProduct} = props;

    alert("Payment started")

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleApprove = (orderId) => {
        setPaidFor(true);
        navigate("/success")
    }

    if(paidFor){
        alert("Thank You for purchasing from FALMA SHOP");
    }


    if(error){
        alert(error);
    }

  return (
    <PayPalScriptProvider>
        <PayPalButtons
            onClick={(data, actions) => {
                const hasAlreadyBoughtCourse = false;
                if(hasAlreadyBoughtCourse){
                    setError("You Already bought this course");
                    return actions.reject();
                }else{
                    return actions.resolve();
                }
            }}
            createOrder = {(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: purchaseProduct.description,
                            amount: {
                                value: purchaseProduct.price,
                            },
                        },
                    ],
                });
            }}
            onApprove = { async (data, action) => {
                const order = await action.order.capture();
                console.log("order", order);
                handleApprove(data.orderID);
                // navigate("/success")
                alert("Thank you for your purchase")
            }}
            onCancel={() => {}}
            onError={(err) => {
                setError(err);
                console.log("PayPal Checkout onError", err);
            }}
        />
    </PayPalScriptProvider>
  )
}

export default PaypalPayment