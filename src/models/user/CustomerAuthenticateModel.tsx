import CustomerModel from "./CustomerModel";

type CustomerAuthenticateModel = null | {
  customer: CustomerModel;
  token: string;
};

export default CustomerAuthenticateModel;
