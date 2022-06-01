import ApiService from "../ApiService";
import APIRoutes from "../APIRoutes";
import UserAuthenticateRequest from "../../models/user/UserAuthenticateRequest";
import UserAuthenticateModel from "../../models/user/UserAuthenticateModel";
import User from "../../models/user/UserModel";

const route = APIRoutes.getLoginUrl();

const LoginService = {
  loginUser: async (userLoginRequest: UserAuthenticateRequest) =>
    ApiService.post<UserAuthenticateModel>(route + "authenticate", userLoginRequest),

  registerUser: async (user: User) =>
    ApiService.post<UserAuthenticateModel>(route + "register", user),

  getUser: async () => ApiService.get<UserAuthenticateModel>(route + "getUser"),
};

export default LoginService;
