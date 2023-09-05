import Head from "#container/AppHead";
import Sidebar from "#components/layout/sidebar";
import TopBar from "#/components/View/Dashboard/TopBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}
const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <div className="flex bg-[#eff3f6] w-full h-screen">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="px-14 mt-10">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
