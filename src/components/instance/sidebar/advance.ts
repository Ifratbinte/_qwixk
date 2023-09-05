import { IconType } from "react-icons/lib";
import {MdOutlineBuild,MdInsertChartOutlined, MdOutlineAnnouncement} from "react-icons/md";

export interface AdvanceItemInterface {
  id: number;
  Icon: IconType;
  title: string;
  path: string;
}
const ListIcon: AdvanceItemInterface[] = [
  {
    id: 1,
    Icon: MdOutlineBuild,
    title: "Admin Panel",
    path: "/dashboard/admin-panel",
  },
  {
    id: 2,
    Icon: MdInsertChartOutlined,
    title: "Analytics",
    path: "/dashboard/analytics",
  },
  {
    id: 2,
    Icon: MdOutlineAnnouncement,
    title: "Reports",
    path: "/dashboard/report",
  },
];
export default ListIcon;
