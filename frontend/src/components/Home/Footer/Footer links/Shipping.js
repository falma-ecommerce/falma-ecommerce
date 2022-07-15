import React from "react";
import "./Shipping.modules.css";

const Shipping = () => {
  return (
    <div className="shippingpage">
      <div className="title">
        <h1 className="changing">About our Shipping </h1>
        <br></br>
        <h4 className="changing2">Do I have to pay for delivery?</h4>
        <p>
          As long as you meet the minimum order value of 24.90 €. Otherwise, the
          standard delivery fee is 4.90 €. We also offer an express delivery
          service for an additional €7.90 fee. Delivery in Germany is fulfilled
          by DHL, DPD, Hermes or GLS. An order placed on Zalando.de may only be
          delivered to an address in Germany. Our delivery times!
        </p>
      </div>
      <div className="title">
        <h4 className="changing2">Standard delivery:</h4>
        <p>
          We will inform you about the expected delivery time of your order in
          checkout and in your order confirmation email - this time may vary
          according to the selected items and the shipping method.
        </p>
        <h4 className="changing2">Express delivery: </h4>
        <p>
          1-2 working days (Mon-Sat) <br></br>Once your parcel has been handed
          over to one of our logistics partners, you will receive your order's
          tracking number along with the delivery confirmation via email. This
          will allow you to check the status of your delivery online using the
          courier's tracking portal.{" "}
        </p>
      </div>
      <div className="title">
        <h4 className="changing2">Contactless delivery</h4>
        <p>
          Our shipping partners DHL, Hermes, DPD and GLS offer you contactless
          delivery. You always receive a notification when your parcel is ready
          to be delivered. You can then choose a preferred delivery location,
          e.g. on your doorstep In addition to this, there are also other
          delivery options available. You can for example change the date of
          delivery if you won't be home on the expected delivery day.
        </p>
      </div>
      <br></br>
      <br></br>
      <div className="returnpage">
        <h1 className="changing">Returns and Refunds</h1>
        <br></br>
        <h4 className="changing2">How do I return my order?</h4>
        <p>
          If you’re not happy with your order, you have 100 days to send us back
          any items - FREE. To make a return, just mark the items you are
          sending back on the return form that came with your parcel, pack what
          you are returning, and use the enclosed return label to send back your
          items. Make sure to cover up or remove the original delivery bar code
          on the box. If you’re missing a return label, register your return
          online below and you’ll also be able to save and print a digital PDF
          label for your retu
        </p>

        <h4 className="changing2">When will I receive it ?</h4>
        <p>
          As soon as your returned items have been received by us (or by our
          partner, in the case of partner items), the amount for those items
          will be automatically refunded. The time it takes for a refund to be
          issued depends on the payment method, but will be processed within 14
          days after we received your return. What you can expect according to
          payment method: Payment by invoice: You only pay for the items that
          you decide to keep. When you make a return, the open invoice amount
          will be reduced accordingly. Have you already paid? Then we will
          credit the amount of the returned items to your bank account.
          Pre-payment: You will be credited to the bank account from which you
          made the payment. Direct debit (SEPA Lastschrift): You will be
          credited to the bank account from which you made the payment. Credit
          card: A credit note will be applied to the credit card account charged
          by us. Your refund will appear in your next credit card statement.
          PayPal: The refund amount will be credited to the PayPal account used
          by you. You can yourself decide on PayPal whether the amount remains
          in your PayPal account or is credited back to your bank account. Gift
          card: If you return goods that have been purchased with a gift card
          the credit will be added to your customer account and you will be able
          to use it on future orders. Gift card credit cannot be exchanged for
          cash.
        </p>
      </div>
      <div className="time">
        &copy;{new Date().getFullYear()} @Falma | Only for Educational Purposes
      </div>
    </div>
  );
};

export default Shipping;
