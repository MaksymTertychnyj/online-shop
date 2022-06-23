import { useContext } from "react";
import HomeContext from "../../navigation/home/HomeContext";
import { DepartmentItemProps } from "./DepartmentItemProps";

const DepartmentItem = (props: DepartmentItemProps) => {
  const { setCurrentDepartment } = useContext(HomeContext);

  return (
    <div
      onClick={() => setCurrentDepartment(props.department)}
      style={{ color: "white", marginLeft: 25, cursor: "pointer" }}
    >
      {props.department?.name}
    </div>
  );
};

export default DepartmentItem;
