import { createContext } from "react";
import AddressModel from "../../models/order/Address/AddressModel";
import ProductModel from "../../models/ProductModel";

const returnType: any = {};
const products: ProductModel[] = Object.create([]);
const address: AddressModel = Object.create(null);

const CustomerBagContext = createContext({
  customerAmount: 0,
  customerProducts: products,
  orderAddress: address,
  addressDescription: "",
  setCustomerAmount: (price: number) => returnType,
  setCustomerProducts: (products: ProductModel[]) => returnType,
  setOrderAddress: (addr: AddressModel) => returnType,
  setAddressDescription: (address: string) => returnType,
});

export default CustomerBagContext;
