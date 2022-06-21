import APIConfig from "./APIConfig";

const APIRoutes = {
  getLoginUrl: () => APIConfig.URL + "loginCustomer/",
  getImageUrl: () => APIConfig.URL + "image/",
  getDepartmentUrl: () => APIConfig.URL + "department/",
  getCategoryUrl: () => APIConfig.URL + "category/",
  getProductUrl: () => APIConfig.URL + "product/",
  getOrderUrl: () => APIConfig.URL + "order/",
  getAddressesUrl: () => APIConfig.URL + "address/",
};

export default APIRoutes;
