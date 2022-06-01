import APIRoutes from "../APIRoutes";
import ApiService from "../ApiService";

const route = APIRoutes.getImageUrl();

const ImageService = {
  getImage: async (targetId: number, targetType: number) =>
    ApiService.get<string>(route + "getByParams/" + targetId + "/" + targetType),
};

export default ImageService;
