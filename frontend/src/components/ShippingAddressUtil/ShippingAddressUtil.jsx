import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

import React from "react";

const ShippingAddressUtil = () => {
  const { checkoutAddresses } = useContext(CheckoutContext);


  return (
    <div>
      <div style={{textAlign: "center"}}>
        <h1>Shipping Address</h1>
        <hr />
        {checkoutAddresses && checkoutAddresses.length > 0 ? (
          checkoutAddresses.map((address) => {
            return (
              <div key={address}>
                <p>{address.fullName}</p>
                <p>{address.address}</p>
                <p>
                  {address.postCode} {address.city}
                </p>
                <p>{address.country}</p>
              </div>
            );
          })
        ) : (
          <p>
            ✋ No shipping address found, Filling in your shipping detail or we
            will assume your billing address as your shipping address please.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShippingAddressUtil;
