import AddressModel from "./Address/AddressModel";
import OrderProductModel from "./OrderProductModel";

type OrderModel = null | {
  orderStatus: number;
  orderAddress: AddressModel;
  customerLogin: string;
  products: OrderProductModel[];
};

export default OrderModel;
