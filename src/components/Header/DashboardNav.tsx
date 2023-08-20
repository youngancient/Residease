import { FunctionComponent } from "react";
import { ILink } from "./Header";
import Link from "next/link";
import { Menu, NotificationIcon, SearchIcon } from "../Icons/HeaderIcons";
import { useRouter } from "next/router";
import { DashboardNavStyles, PageLinkStyles } from "@/styles/ComponentStyles/HeaderStyles";

const Links: ILink[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Available Units", href: "/dashboard/availableunits" },
  { name: "Inspection", href: "/dashboard/inspection" },
];

export const DashboardNav: FunctionComponent = () => {
  const router = useRouter();
  return (
    <DashboardNavStyles>
      <div className="logo">logo</div>
      <div className="desktop-links">
        {Links.map((navlink, index) => (
          <Link href={navlink.href} key={index}>
            <PageLinkStyles $isActive={router.pathname === navlink.href}>{navlink.name}</PageLinkStyles>
          </Link>
        ))}
      </div>
      <div className="dashboard-btns">
        <div className="one">
          <button type="button"> <NotificationIcon /></button>
          <button type="button"><SearchIcon /></button>
        </div>
        <div className="avatar">
          
        </div>
      </div>
      <Menu />
    </DashboardNavStyles>
  );
};
