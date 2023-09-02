import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiAlignRight, FiUser } from "react-icons/fi";
import styles from "./menu.module.css";
import Navigation from "./NavComponent";
import AuthDialog from "#/components/auth/login";
import { Button } from "@material-tailwind/react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import AuthButton from "#/components/Button/btn-primary";
import DarkModeToggle from "#/components/ThemeMode/DarkModeToggle";
const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  // Auth dialog
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="container mx-auto z-20 py-4 px-2 lg:px-0 flex items-center justify-between lg:mt-[2rem]">
      <div className="flex items-center">
        <div className="logo lg:w-[300px] w-[100px]">
          <img src="/images/logo/logo.png" alt="" className="lg:w-[140px]" />
        </div>
        <div
          className={`${styles.header_menu} ${
            isVisible ? styles.responsive_menu : ""
          }`}
        >
          <button
            onClick={() => setIsVisible((prevState) => !prevState)}
            className="lg:hidden"
          >
            <FaTimes className="text-xl lg:relative absolute bg-base-green rounded-full text-white p-1 h-6 w-6 top-4 right-4" />
          </button>
          <img
            src="/images/logo/logo.png"
            alt=""
            className="mb-5 lg:hidden block"
          />
          <Navigation />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <AuthButton
          text="Sign In"
          isAuth
          isTransparent
          handleOpen={handleOpen}
        />
        <button
          onClick={handleOpen}
          className="lg:hidden border h-7 w-7 flex items-center justify-center bg-slate-50 rounded"
        >
          <FiUser />
        </button>
        <AuthDialog onclickOpen={handleOpen} isOpen={open} />
        <button
          className="btn visible lg:hidden"
          onClick={() => setIsVisible((prevState) => !prevState)}
        >
          <FiAlignRight className="text-2xl lg:relative text-primary" />
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Menu;
