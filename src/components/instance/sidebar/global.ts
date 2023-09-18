import { IconType } from "react-icons/lib";
import { FiHome, FiGrid } from "react-icons/fi";

export interface GlobalItemInterface {
  id: number;
  Icon: IconType;
  title: string;
  path: string;
  //   submenu?: {
  //     id: number;
  //     title: string;
  //     path: string;
  //     Icon: IconType;
  //   }[];
}
const ListIcon: GlobalItemInterface[] = [
  {
    id: 1,
    Icon: FiHome,
    title: "Dash",
    path: "/dashboard",
  },
  {
    id: 2,
    Icon: FiGrid,
    title: "Apps",
    path: "/dashboard/general-apps",
  },
];
export default ListIcon;
