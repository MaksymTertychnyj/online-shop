import OrderModel from "../../models/order/OrderModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getOrderUrl();

const OrderService = {
  getOrdersByCustomer: async (customerLogin: string) =>
    ApiService.get<OrderModel[]>(route + "getByCustomer/" + customerLogin),
  confirmOrder: async (order: OrderModel) => ApiService.post<OrderModel>(route + "add", order),
  deleteOrder: async (orderId: number) => ApiService.delete(route + "delete/" + orderId),
};

export default OrderService;
