import ProductModel from "../../models/ProductModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getProductUrl();

const ProductService = {
  getAllProducts: async () => ApiService.get<ProductModel[]>(route + "getAll"),
  getProduct: async (id: number) => ApiService.get<ProductModel>(route + "getById/" + id),
  getProductsByCategory: async (categoryId: number) =>
    ApiService.get<ProductModel[]>(route + "getByCategory/" + categoryId),
};

export default ProductService;
