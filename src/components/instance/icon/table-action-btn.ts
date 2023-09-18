import { FiEdit, FiPlusCircle, FiTrash2 } from "react-icons/fi";
import { IconType } from "react-icons/lib";
export interface listInterface {
  Icon: IconType;
  content: string;
  color:string
}
const ListIcon: listInterface[] = [
  {
    Icon: FiPlusCircle,
    content: "Add",
    color: "green"
  },
  {
    Icon: FiEdit,
    content: "Modify",
    color:"blue"
  },
  {
    Icon: FiTrash2,
    content: "Delete",
    color: "red"
  },
];
export default ListIcon;
