import CustomerAuthenticateModel from "../../models/user/CustomerAuthenticateModel";

const AuthManager = {
  signInAsync: async (customer: CustomerAuthenticateModel) => {
    sessionStorage.setItem("user", JSON.stringify(customer));
  },

  signOutAsync: async () => {
    sessionStorage.removeItem("user");
  },

  getUser: async () => {
    return sessionStorage.getItem("user");
  },
};

export default AuthManager;
