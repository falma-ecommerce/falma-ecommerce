import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const PaymentDetail = () => {
  const { totalPrice, itemPercentage, shipment, itemTotal } =
    useContext(CartContext);

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Order Overview</h1>
      <hr />
      <div className="total">
        <div>Subtotal</div>
        <div>
          <p>€{totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="total">
        <div>Taxes 19 percent%</div>
        <div>
          <p>€{itemPercentage}</p>
        </div>
      </div>
      <div className="total">
        <div>Shipment</div>
        <div>
          <p>€{shipment}</p>
        </div>
      </div>

      <hr />

      <div className="total">
        <div>
          <h3>TOTAL</h3>
        </div>
        <div>
          <h3>€{itemTotal}</h3>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PaymentDetail;
