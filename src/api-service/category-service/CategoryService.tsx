import CategoryModel from "../../models/CategoryModel";
import DepartmentModel from "../../models/DepartmentModel";
import APIConfig from "../APIConfig";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getCategoryUrl();

const CategoryService = {
  getAllCategories: async () => ApiService.get<CategoryModel[]>(route + "getAll"),
  getCategoriesByDepartment: async (departmentId: number) =>
    ApiService.get<CategoryModel[]>(route + "getByDepartment/" + departmentId),
  getCategory: async (id: number) => ApiService.get<CategoryModel>(route + "getById/" + id),
};

export default CategoryService;
