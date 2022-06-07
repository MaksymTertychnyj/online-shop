import { createContext } from "react";
import ProductModel from "../../models/ProductModel";

const returnType: any = {};
const products: ProductModel[] = Object.create([]);

const CustomerBagContext = createContext({
  customerAmount: 0,
  customerProducts: products,
  setCustomerAmount: (price: number) => returnType,
  setCustomerProducts: (products: ProductModel[]) => returnType,
});

export default CustomerBagContext;
