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
      <MenuList>
        <MenuItem className="flex items-center gap-2">
          <FiUser />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <FiEdit />
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <FiLogOut />
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default UserPanel