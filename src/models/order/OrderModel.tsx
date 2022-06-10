import ProductModel from "../ProductModel";
import OrderAddressModel from "./OrderAddressModel";

type OrderModel = null | {
  id: number;
  orderStatus: number;
  orderAddress: OrderAddressModel;
  customerLogin: string;
  products: ProductModel[];
};

export default OrderModel;
