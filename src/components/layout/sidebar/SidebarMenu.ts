import { FaThList } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FiHome, FiGrid} from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
export interface SidebarInterface {
  id: number;
  Icon?: IconType;
  title: string;
  path: string;
  submenu?: {
    id: number;
    title: string;
    path: string;
    Icon: IconType;
  }[];
}
const ListIcon: SidebarInterface[] = [
  {
    id: 1,
    Icon: FiHome,
    title: "Dash",
    path: "/",
    // submenu: [
    //   {
    //     id: 1,
    //     title: "Analytic",
    //     path: "/",
    //     Icon: FaThList,
    //   },
    // ],
  },
  {
    id: 2,
    Icon: FiGrid,
    title: "Apps",
    path: "/",
  },
  {
    id: 3,
    Icon: BiSupport,
    title: "Support",
    path: "/",
  },
  {
    id: 4,
    Icon: BiSupport,
    title: "Resources",
    path: "/",
  },
];
export default ListIcon;
