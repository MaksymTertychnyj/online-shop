import ApiService from "../ApiService";
import APIRoutes from "../APIRoutes";
import CustomerAuthenticateRequest from "../../models/user/CustomerAuthenticateRequest";
import CustomerAuthenticateModel from "../../models/user/CustomerAuthenticateModel";
import CustomerModel from "../../models/user/CustomerModel";

const route = APIRoutes.getLoginUrl();

const LoginService = {
  loginCustomer: async (customerLoginRequest: CustomerAuthenticateRequest) =>
    ApiService.post<CustomerAuthenticateModel>(route + "authenticate", customerLoginRequest),

  registerCustomer: async (customer: CustomerModel) =>
    ApiService.post<CustomerAuthenticateModel>(route + "register", customer),
};

export default LoginService;
