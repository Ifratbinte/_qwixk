import { IconType } from "react-icons/lib";
import {MdOutlineAdsClick ,MdAddchart} from "react-icons/md";

export interface BusinessItemInterface {
  id: number;
  Icon: IconType;
  title: string;
  path: string;
}
const ListIcon: BusinessItemInterface[] = [
  {
    id: 1,
    Icon: MdAddchart,
    title: "CMS",
    path: "/dashboard/cms",
  },
  {
    id: 2,
    Icon: MdOutlineAdsClick,
    title: "Marketing",
    path: "/dashboard/marketing",
  },
];
export default ListIcon;
