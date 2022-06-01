import UserAuthenticateModel from "../../models/user/UserAuthenticateModel";

const AuthManager = {
  signInAsync: async (user: UserAuthenticateModel) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  },

  signOutAsync: async () => {
    sessionStorage.removeItem("user");
  },

  getUser: async () => {
    return sessionStorage.getItem("user");
  },
};

export default AuthManager;
