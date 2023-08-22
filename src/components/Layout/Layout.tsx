import { FunctionComponent, ReactNode, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { DashboardNav } from "../Header/DashboardNav";
import { useRouter } from "next/router";
import { LayoutStyle } from "@/styles/ComponentStyles/Layout";
import { dataSelector } from "@/redux/dataSlice";

export interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  const { user } = useAppSelector(userSelector);
  const { isNavOpen } = useAppSelector(dataSelector);
  const router = useRouter();
  useEffect(() => {
    // I will change this
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, []);
  
  return (
    <LayoutStyle $isNavOpen={isNavOpen}>
      {user === null ? <Header /> : <DashboardNav />}
      <main>{children}</main>
      {user === null && <Footer />}
    </LayoutStyle>
  );
};

export default Layout;
