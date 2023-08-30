import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";
export interface ContactInterface {
  id: number;
  Icon?: IconType;
  contact: string;
}
const ListIcon: ContactInterface[] = [
  {
    id: 1,
    Icon: BsFillTelephoneFill,
    contact: "+088 (246) 6XX-XX-XX",
  },
  {
    id: 2,
    Icon: BsFillEnvelopeFill,
    contact: "hello@qwixk.com",
  },
];
export default ListIcon;
