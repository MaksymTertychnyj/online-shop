import OrderStatus from "../OrderStatus";
import AddressModel from "./Address/AddressModel";
import OrderProductModel from "./OrderProductModel";

type OrderModel = null | {
  dateRegister: Date;
  status: OrderStatus;
  amount: number;
  orderAddress: AddressModel;
  customerLogin: string;
  products: OrderProductModel[];
};

export default OrderModel;
