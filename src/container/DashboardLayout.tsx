import Head from "#container/AppHead";
import Footer from "#components/layout/footer";
import Sidebar from "#components/layout/sidebar";
import TopBar from "#/components/View/Dashboard/TopBar";
// import Sidebar from "#components/layout/sidebar/Sidebar";

interface Props {
  children: JSX.Element | JSX.Element[];
}
const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <div className="flex bg-[#eff3f6] w-full">
        <Sidebar />
        <div className="w-full">
          <TopBar />
          <div className="px-14">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
