import { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

import React from "react";

const ShippingAddressUtil = () => {
  const { checkoutAddresses } = useContext(CheckoutContext);

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <div className="address">
        <h1>Shipping Address</h1>
        {checkoutAddresses &&
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
          })}
      </div>
    </div>
  );
};

export default ShippingAddressUtil;
