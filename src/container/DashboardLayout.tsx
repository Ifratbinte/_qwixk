import Head from "#container/AppHead";
import Sidebar from "#components/layout/sidebar";
import TopBar from "#/components/View/Dashboard/TopBar";
import { useState } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  onClick?: () => void;
}
const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <>
      <Head />
      <div className="flex bg-[#eff3f6] w-full">
        <Sidebar isVisible={isVisible} onHandleVisible={handleVisible}/>
        <div className="w-full pl-6 absolute z-10 xl:z-0 xl:relative">
          <div className="flex bg-white shadow-base px-6 rounded-xl">
            <TopBar onHandleVisible={handleVisible} />
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
