import CustomerAuthenticateModel from "../../models/user/CustomerAuthenticateModel";
import CustomerChangeModel from "../../models/user/CustomerChangeModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getCustomerUrl();

const CustomerService = {
  updateCustomer: async (data: CustomerChangeModel) =>
    ApiService.put<CustomerAuthenticateModel>(route + "update", data),
};

export default CustomerService;
