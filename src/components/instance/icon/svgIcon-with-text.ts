import { FiRotateCcw } from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import { IconType } from "react-icons/lib";
export interface ActionInterface {
  Icon: IconType;
  content: string;
}
const ListIcon: ActionInterface[] = [
  {
    Icon: FiRotateCcw,
    content: "Reload",
  },
  {
    Icon: BiSortAlt2,
    content: "Sort",
  },
];
export default ListIcon;
