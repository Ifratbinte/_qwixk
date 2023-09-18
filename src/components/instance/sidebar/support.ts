import { IconType } from "react-icons/lib";
import { MdOutlineRssFeed } from "react-icons/md";

export interface SupportItemInterface {
  id: number;
  Icon: IconType;
  title: string;
  path: string;
}
const ListIcon: SupportItemInterface[] = [
  {
    id: 1,
    Icon: MdOutlineRssFeed,
    title: "Feedback",
    path: "/dashboard/feedback",
  },
];
export default ListIcon;
