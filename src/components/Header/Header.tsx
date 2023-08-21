import { FunctionComponent } from "react";

import { MobileNavStyles } from "@/styles/ComponentStyles/mobileNavStyles";
import Link from "next/link";
import { CloseIcon, LogoIcon, Menu } from "../Icons/HeaderIcons";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { dataSelector, setIsNavOpen } from "@/redux/dataSlice";
import {
  HeaderStyles,
  PageLinkStyles,
} from "@/styles/ComponentStyles/HeaderStyles";
import { motion, AnimatePresence } from "framer-motion";

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
      <LogoIcon />
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
      <AnimatePresence>{isNavOpen && <MobileNav key="hinokami" />}</AnimatePresence>
    </HeaderStyles>
  );
};

export const MobileNav: FunctionComponent = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <MobileNavStyles>
      <div
        className="nothing"
        onClick={() => dispatch(setIsNavOpen(false))}
      ></div>
      <div className="main">
        <div className="x">
          <CloseIcon clickAction={() => dispatch(setIsNavOpen(false))} />
        </div>
        <div className="mobile-links">
          {Links.map((navlink, index) => (
            <Link href={navlink.href} key={index}>
              <PageLinkStyles $isActive={router.pathname === navlink.href}>
                {navlink.name}
              </PageLinkStyles>
            </Link>
          ))}
        </div>
        <div className="reg">
          <button type="button">Register</button>
        </div>
      </div>
    </MobileNavStyles>
  );
};
