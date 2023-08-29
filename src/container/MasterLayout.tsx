import Header from "#/components/layout/header";
import Head from "#container/AppHead";
import Footer from "#components/layout/footer"

interface Props {
  children: JSX.Element | JSX.Element[];
}
const MasterLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default MasterLayout;
