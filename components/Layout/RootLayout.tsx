import { FunctionComponent, ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export interface ILayout {
  children: ReactNode;
}

const RootLayout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
