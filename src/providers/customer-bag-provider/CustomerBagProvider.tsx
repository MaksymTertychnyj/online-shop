import { useState } from "react";
import AddressModel from "../../models/order/Address/AddressModel";
import ProductModel from "../../models/ProductModel";
import CustomerBagContext from "./CustomerBagContext";

const CustomerBagProvider = ({ children }: any) => {
  const [customerAmount, setCustomerAmount] = useState(0);
  const [customerProducts, setCustomerProducts] = useState<ProductModel[]>([]);
  const [addressDescription, setAddressDescription] = useState("");
  const [orderAddress, setOrderAddress] = useState<AddressModel>(null);

  return (
    <>
      <CustomerBagContext.Provider
        value={{
          customerAmount: customerAmount,
          customerProducts,
          addressDescription,
          orderAddress,
          setCustomerAmount: setCustomerAmount,
          setCustomerProducts,
          setAddressDescription,
          setOrderAddress,
        }}
      >
        {children}
      </CustomerBagContext.Provider>
    </>
  );
};

export default CustomerBagProvider;
