import { createContext, useState } from "react";

const CheckoutContext = createContext({});

function CheckoutProvider({ children }) {
  const [checkoutAddresses, setCheckoutAddresses] = useState([]);

  const updateCheckoutAddresses = (addresses) => {
    const newAddresses = checkoutAddresses.concat(addresses);
    setCheckoutAddresses(newAddresses);
  };
  return (
    <CheckoutContext.Provider
      value={{
        checkoutAddresses,
        updateCheckoutAddresses,
        setCheckoutAddresses,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export { CheckoutContext, CheckoutProvider };
