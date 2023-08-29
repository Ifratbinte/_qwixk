
import { VscVmConnect } from "react-icons/vsc";
import { BsShieldCheck } from "react-icons/bs";
import { BiTrim } from "react-icons/bi";
import { IconType } from "react-icons/lib";

export interface TabOptionInterface {
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
