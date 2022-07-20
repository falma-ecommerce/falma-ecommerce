import React, { useRef, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function Paypal() {
  const { grossTotal, cartItems } = useContext(CartContext);

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: cartItems.name,
                amount: {
                  currency_code: "EUR",
                  value: grossTotal,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Successful order:", order);
          window.location.replace("http://localhost:5000/success")
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
  
}
