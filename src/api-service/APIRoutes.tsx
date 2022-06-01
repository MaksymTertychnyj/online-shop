import APIConfig from "./APIConfig";

const APIRoutes = {
  getLoginUrl: () => APIConfig.URL + "login/",
  getImageUrl: () => APIConfig.URL + "image/",
  getDepartmentUrl: () => APIConfig.URL + "department/",
  getCategoryUrl: () => APIConfig.URL + "category/",
  getProductUrl: () => APIConfig.URL + "product/",
};

export default APIRoutes;
