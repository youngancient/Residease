import { FunctionComponent, ReactNode, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { DashboardNav } from "../Header/DashboardNav";
import { useRouter } from "next/router";

export interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  const { user } = useAppSelector(userSelector);
  const router  = useRouter();
  // useEffect(()=>{
  //   if(user){
  //     router.push('/dashboard');
  //   }
  // },[user]);
  return (
    <>
      {user === null ? <Header /> : <DashboardNav />}
      <main>{children}</main>
      {user === null ? <Footer /> : <></>}
    </>
  );
};

export default Layout;
