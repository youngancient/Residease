import { FunctionComponent } from "react";
import { ILink } from "./Header";
import Link from "next/link";
import {
  CloseIcon,
  Menu,
  NotificationIcon,
  SearchIcon,
} from "../Icons/HeaderIcons";
import { useRouter } from "next/router";
import {
  DashboardNavStyles,
  PageLinkStyles,
} from "@/styles/ComponentStyles/HeaderStyles";
import { MobileNavStyles } from "@/styles/ComponentStyles/mobileNavStyles";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { dataSelector, setIsNavOpen } from "@/redux/dataSlice";
import { AnimatePresence, motion } from "framer-motion";
import { slidevariants } from "@/animations/homepage";

const Links: ILink[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Available Units", href: "/dashboard/availableunits" },
  { name: "Inspection", href: "/dashboard/inspection" },
];

export const DashboardNav: FunctionComponent = () => {
  const router = useRouter();
  const { isNavOpen } = useAppSelector(dataSelector);
  return (
    <DashboardNavStyles>
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
      <div className="dashboard-btns">
        <div className="one">
          <button type="button">
            {" "}
            <NotificationIcon />
          </button>
          <button type="button">
            <SearchIcon />
          </button>
        </div>
        <div className="avatar">J</div>
      </div>
      <Menu />
      <AnimatePresence>{isNavOpen && <DashboardMobileNav key="anime" />}</AnimatePresence>
    </DashboardNavStyles>
  );
};

export const DashboardMobileNav: FunctionComponent = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <MobileNavStyles key="dashboard">
      <div
        className="nothing"
        onClick={() => dispatch(setIsNavOpen(false))}
      ></div>
      <motion.div className="main"
      initial = "initial"
      animate = "final"
      exit= "exit"
      key= "hinokami"
      variants={slidevariants}
      >
        <div className="xx">
          <div className="x">
            <CloseIcon clickAction={() => dispatch(setIsNavOpen(false))} />
          </div>
          <div className="avatar">J</div>
        </div>
        <div className="mobile-links">
          {Links.map((navlink, index) => (
            <Link
              href={navlink.href}
              key={index}
              onClick={() => dispatch(setIsNavOpen(false))}
            >
              <PageLinkStyles $isActive={router.pathname === navlink.href}>
                {navlink.name}
              </PageLinkStyles>
            </Link>
          ))}
        </div>
        <div className="reg">
          <button type="button">Cta btn</button>
        </div>
      </motion.div>
    </MobileNavStyles>
  );
};
