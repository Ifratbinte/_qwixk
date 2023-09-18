import { Menu, MenuHandler, MenuList, Avatar } from "@material-tailwind/react";

const UserPanel = () => {
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer h-10 w-10"
          src="/images/user.png"
        />
      </MenuHandler>
      <MenuList className="rounded-2xl z-30 mr-6">
        <div className=" w-[350px] py-6 px-6 rounded-2xl">
          <div className="flex items-center gap-6">
            <img src="/images/user.png" alt="" className="w-16 h-16" />
            <div>
              <div className="text-xl text-[#364a63] font-semibold font-poppins">
                Robert Martin
              </div>
              <div className="text-base font-poppins py-1">
                <span className="font-semibold">MID:</span> 02392091
              </div>
              <span className="text-base font-poppins text-gray-500 py-1">
                Member Since 2009
              </span>
            </div>
          </div>
          <button className="w-full border border-green-400 rounded-xl py-2 px-9 text-green-500 text-xl my-6 font-poppins">
            View Profile
          </button>
          <ul className="font-poppins">
            <li className="text-black font-medium text-lg py-2">
              <a href="">Settings and Privacy</a>
            </li>
            <li className="text-black font-medium text-lg py-2">
              <a href="">Appearance</a>
            </li>
            <li className="text-red-600 font-medium text-lg py-2">
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      </MenuList>
    </Menu>
  );
};
export default UserPanel;
