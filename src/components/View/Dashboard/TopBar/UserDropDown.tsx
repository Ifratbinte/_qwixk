import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { FiUser, FiEdit, FiLogOut } from "react-icons/fi";

const UserPanel = () => {
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer h-12 w-12"
          src="/images/user.png"
        />
      </MenuHandler>
      <MenuList className="rounded-2xl ">
        <div className=" w-[400px] py-6 px-10 rounded-2xl">
          <div className="flex items-center gap-6">
            <img src="/images/user.png" alt="" className="w-20 h-20" />
            <div>
              <div className="text-3xl font-semibold font-poppins">
                Robert Martin
              </div>
              <div className="text-lg font-poppins">
                <span className="font-semibold">MID:</span> 02392091
              </div>
              <span className="text-lg font-poppins text-gray-500">
                Member Since 2009
              </span>
            </div>
          </div>
          <button className="w-full border border-green-400 rounded-xl py-2 px-9 text-green-500 text-xl my-6 font-poppins">
            View Profile
          </button>
          <ul className="font-poppins">
            <li className="text-black font-semibold text-xl py-2.5">
              <a href="">Settings and Privacy</a>
            </li>
            <li className="text-black font-semibold text-xl py-2.5">
              <a href="">Appearance</a>
            </li>
            <li className="text-red-600 font-semibold text-xl py-2.5">
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      </MenuList>
    </Menu>
  );
};
export default UserPanel;
