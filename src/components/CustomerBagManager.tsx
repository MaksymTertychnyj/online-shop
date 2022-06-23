import ProductModel from "../models/ProductModel";

const CustomerBagManager = {
  addCustomerBag: async (products: ProductModel[], amount: number) => {
    sessionStorage.setItem("customerProducts", JSON.stringify(products));
    sessionStorage.setItem("customerAmount", amount.toString());
  },
};

export default CustomerBagManager;
