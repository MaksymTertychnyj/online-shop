import DepartmentModel from "../../models/DepartmentModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getDepartmentUrl();

const DepartmentService = {
  getAllDepartments: async () => ApiService.get<DepartmentModel[]>(route + "getAll"),
  getDepartment: async (id: number) => ApiService.get<DepartmentModel>(route + "getById/" + id),
};

export default DepartmentService;
