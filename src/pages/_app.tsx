import MasterLayout from "#/container/MasterLayout";
import "#/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "#/app";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import AuthLayout from "#/container/AuthLayout";
import DashboardLayout from "#/container/DashboardLayout";

export default function App({ Component, pageProps }: AppProps) {
  const authPath = ["/auth/login", "/auth/registration"];
  const pathname = usePathname();

  // console.log(
  //   "dashboard",
  //   dashboard.find((i) => i === pathname)
  // );
  // console.log("pathname", pathname);

  return (
    <Provider store={store}>
      {/* {dashboard.find((i) => i === pathname) ? ( */}
      {pathname.startsWith("/dashboard") ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <MasterLayout>
          <Component {...pageProps} />
        </MasterLayout>
      )}
    </Provider>
  );
}
