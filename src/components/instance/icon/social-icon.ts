import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialIconInterface {
  id: number;
  Icon: IconType;
  path: string;
}

const socialIcon: SocialIconInterface[] = [
  {
    id: 1,
    Icon: FaFacebookF,
    path: "#",
  },
  {
    id: 1,
    Icon: FaFacebookF,
    path: "#",
  },
  {
    id: 2,
    Icon: FaLinkedinIn,
    path: "#",
  },
  {
    id: 3,
    Icon: FaGithub,
    path: "#",
  },
];
export default socialIcon;
