import { Outlet } from "react-router";
import Header from "@/components/common/Header";
import Footer from "./../components/common/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
