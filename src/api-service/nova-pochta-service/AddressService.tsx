import AreaModel from "../../models/order/Address/AreaModel";
import CityModel from "../../models/order/Address/CityModel";
import WarehouseModel from "../../models/order/Address/WarehouseModel";
import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getAddressesUrl();

const AddressService = {
  getAreas: async () => ApiService.get<AreaModel[]>(route + "getAreas"),
  getCities: async (areaRef: string) => ApiService.get<CityModel[]>(route + "getCities/" + areaRef),
  getWarehouses: async (cityRef: string) =>
    ApiService.get<WarehouseModel[]>(route + "getWarehouses/" + cityRef),
};

export default AddressService;
