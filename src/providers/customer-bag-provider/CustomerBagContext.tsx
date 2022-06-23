import { createContext } from "react";
import AddressModel from "../../models/order/Address/AddressModel";
import { ProductDto } from "../../models/order/ProductDto";

const returnType: any = {};
const products: ProductDto[] = Object.create([]);
const address: AddressModel = Object.create(null);

const CustomerBagContext = createContext({
  customerAmount: 0,
  customerProducts: products,
  orderAddress: address,
  addressDescription: "",
  setCustomerAmount: (price: number) => returnType,
  setCustomerProducts: (products: ProductDto[]) => returnType,
  setOrderAddress: (addr: AddressModel) => returnType,
  setAddressDescription: (address: string) => returnType,
});

export default CustomerBagContext;
