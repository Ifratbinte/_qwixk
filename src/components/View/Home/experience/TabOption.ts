import { VscVmConnect } from "react-icons/vsc";
import { BsShieldCheck } from "react-icons/bs";
import { BiTrim } from "react-icons/bi";
import { IconType } from "react-icons/lib";
import Monitor from "../../../../../public/images/icon/svg/monitor.svg";
import SVG from "react-svg";

export interface TabOptionInterface {
  // Icon: typeof SVG
  Icon: IconType;
  title: string;
}

const TabOption: TabOptionInterface[] = [
  {
    Icon: VscVmConnect,
    title: "Pioneering the Future",
  },
  {
    Icon: BsShieldCheck,
    title: "Unshakeable Security",
  },
  {
    Icon: BiTrim,
    title: "Transparency at Heart",
  },
];
export default TabOption;
