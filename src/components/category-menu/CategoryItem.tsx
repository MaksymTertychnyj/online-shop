import CategoryModel from "../../models/CategoryModel";
import { CategoryItemProps } from "./CategoryItemProps";

const CategoryItem = (props: CategoryItemProps) => {
  return (
    <tr
      style={{ backgroundColor: "#E5E4E2", textAlign: "center", color: "#52595D", height: "40px" }}
    >
      {props.category?.name}
    </tr>
  );
};

export default CategoryItem;
