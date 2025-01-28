import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

function Payment() {
  const location = useLocation();
  let total_amount = location.state.reduce((acc, item) => {
    return acc + item.caloriesPerServing * item.qty;
  }, 0);
  let transaction_uuid = uuidv4();
  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  return (
    <div>
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input
          type="hidden"
          id="amount"
          name="amount"
          value={total_amount}
          required
        />
        <input
          type="hidden"
          id="tax_amount"
          name="tax_amount"
          value="0"
          required
        />
        <input
          type="hidden"
          id="total_amount"
          name="total_amount"
          value={total_amount}
          required
        />
        <input
          type="hidden"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transaction_uuid}
          required
        />
        <input
          type="hidden"
          id="product_code"
          name="product_code"
          value="EPAYTEST"
          required
        />
        <input
          type="hidden"
          id="product_service_charge"
          name="product_service_charge"
          value="0"
          required
        />
        <input
          type="hidden"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value="0"
          required
        />
        <input
          type="hidden"
          id="success_url"
          name="success_url"
          value="https://momo-house.vercel.app/success"
          required
        />
        <input
          type="hidden"
          id="failure_url"
          name="failure_url"
          value="https://momo-house.vercel.app/failure"
          required
        />
        <input
          type="hidden"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />
        <input
          type="hidden"
          id="signature"
          name="signature"
          value={hashInBase64}
          required
        />

        <h1>Total_amount:{total_amount}</h1>
        <input
          className="bg-orange-500 text-white p-2  rounded-lg w-44"
          value="Conform"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Payment;
