import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  FiEdit,
  FiPlusCircle,
  FiTrash2,
} from "react-icons/fi";

const Dropdown = () => {
  return (
    <Menu>
      <MenuHandler>
      <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer h-5 w-5"
          src="/images/icon/verticle-menu.png"
        />
      </MenuHandler>
      <MenuList className="mr-10 ">
        <MenuItem className="flex items-center text-green-600 gap-3 px-2 py-1 focus:ring-0 hover:ring-0">
          <FiPlusCircle />
          <Typography variant="small" className="font-normal">
            Add
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center text-blue-500 gap-3 px-2 py-1">
          <FiEdit />
          <Typography variant="small" className="font-normal">
            Modify
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center text-red-500 gap-3 px-2 py-1">
          <FiTrash2 />
          <Typography variant="small" className="font-normal">
            Delete
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown