import {
  FooterLinkStyles,
  FooterStyles,
} from "@/styles/ComponentStyles/FooterStyles";
import { PageLinkStyles } from "@/styles/ComponentStyles/HeaderStyles";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { FB, Insta, XIcon } from "../Icons/FooterIcon";
import { LogoIcon } from "../Icons/HeaderIcons";

export const Footer: FunctionComponent = () => {
  return (
    <FooterStyles>
      <div className="y">
        <div className="first">
          <div className="logo">
            <LogoIcon />
            <p>
              We make you smile! Entrust your smile to us.We are a kinikan
              kinikan of 5 teams solving a major problem in the Nigeria
              Eco-system of bla bla bla bla.
            </p>
          </div>
          <div className="sec">
            <div className="one">
              <div className="head">Quick Links</div>
              <div className="footer-links">
                <Link href="#">
                  <FooterLinkStyles>About Us</FooterLinkStyles>
                </Link>
                <Link href="#">
                  <FooterLinkStyles>Properties</FooterLinkStyles>
                </Link>
                <Link href="#">
                  <FooterLinkStyles>FAQs</FooterLinkStyles>
                </Link>
              </div>
            </div>
            <div className="one">
              <div className="head">Help</div>
              <div className="footer-links">
                <Link href="#">
                  <FooterLinkStyles>Contact Us</FooterLinkStyles>
                </Link>
                <Link href="#">
                  <FooterLinkStyles>How to Earn</FooterLinkStyles>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="one">
          <div className="head">Follow Us On</div>
          <div className="social-links">
              <Socials href="#">
                <XIcon />
              </Socials>
              <Socials href="#">
                <FB />
              </Socials>
              <Socials href="#">
                <Insta />
              </Socials>
          </div>
        </div>
      </div>
      <div className="third">
        <p>©SMS Services. All Right Reserved</p>
        <div className="div-fl">
          <Link href="#">
            <PageLinkStyles>Terms of Usage</PageLinkStyles>
          </Link>
          <Link href="#">
            <PageLinkStyles>Privacy Policy</PageLinkStyles>
          </Link>
        </div>
      </div>
    </FooterStyles>
  );
};

export interface ISocials {
  href: string;
  children: ReactNode;
}
export const Socials: FunctionComponent<ISocials> = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};
