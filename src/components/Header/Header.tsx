import { FunctionComponent } from "react";

import { MobileNavStyles } from "@/styles/ComponentStyles/mobileNavStyles";
import Link from "next/link";
import { Menu } from "../Icons/HeaderIcons";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks/hook";
import { dataSelector } from "@/redux/dataSlice";
import { HeaderStyles, PageLinkStyles } from "@/styles/ComponentStyles/HeaderStyles";

export interface ILink {
  name: string;
  href: string;
  isActive?: boolean;
}
const Links: ILink[] = [
  { name: "Home", href: "/" },
  { name: "How it Works", href: "/howitworks" },
  { name: "Properties", href: "/properties" },
  { name: "About Us", href: "/aboutus" },
];
export const Header: FunctionComponent = () => {
  const router = useRouter();
  const { isNavOpen } = useAppSelector(dataSelector);
  return (
    <HeaderStyles>
      <div className="logo">logo</div>
      <div className="desktop-links">
        {Links.map((navlink, index) => (
          <Link href={navlink.href} key={index}>
            <PageLinkStyles $isActive={router.pathname === navlink.href}>
              {navlink.name}
            </PageLinkStyles>
          </Link>
        ))}
      </div>
      <div className="button">
        <button type="button">Register here</button>
      </div>
      <Menu />
      {isNavOpen && <MobileNav />}
    </HeaderStyles>
  );
};

export const MobileNav: FunctionComponent = () => {
  return <MobileNavStyles>
    <div className="nothing"></div>
    <div className="main">
      
    </div>
  </MobileNavStyles>;
};
