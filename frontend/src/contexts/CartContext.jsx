import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext({});

// you can give this component any name you wish
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const addItemToCart = (item, quantity) => {
    const checkProductInCart = cartItems.find(
      (product) => product.id === item.id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + item.price.current.value * quantity
    );
    console.log(item.price);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      // eslint-disable-next-line array-callback-return
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === item.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      item.quantity = quantity;

      setCartItems([...cartItems, item]);
    }
    toast.success(`${qty} ${item.name} added to the cart.`);
  };

  const removeItemFromCart = (item) => {
    foundProduct = cartItems.find((product) => product.id === item.id);
    const newCartItems = cartItems.filter((product) => product.id !== item.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice -
        foundProduct.price.current.value * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((product) => product.id === id);
    index = cartItems.findIndex((item) => item.id === id);
    const newCartItems = cartItems.filter((product) => product.id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + foundProduct.price.current.value
      );
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice(
          (prevTotalPrice) => prevTotalPrice - foundProduct.price.current.value
        );
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };
  const itemPercentage = ((19 / 100) * totalPrice).toFixed(2);
  const shipment = (totalPrice > 75 ? 0 : 3.99).toFixed(2);
  const itemTotal = (+totalPrice + -itemPercentage + +shipment).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        toggleCartItemQuantity,
        incQty,
        decQty,
        showCart,
        setShowCart,
        totalPrice,
        totalQuantities,
        itemPercentage,
        shipment,
        itemTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
