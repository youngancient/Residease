import {
  BackBtnStyles,
  HouseDetailsStyles,
  LargeTextStyles,
} from "@/styles/ComponentStyles/Dashboard/HouseDetailsStyles";
import { InnerSection, MiniSection } from "@/styles/PageStyles/SectionStyles";
import { BackIcon } from "../Icons/DashboardIcons";
import { FunctionComponent } from "react";
import { IClick } from "../Icons/HeaderIcons";
import { useRouter } from "next/router";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { LargeBtn } from "../Header/Header";

export const HouseDetailComp = () => {
  const { user } = useAppSelector(userSelector);
  return (
    <MiniSection>
      <HouseDetailsStyles>
        <BackBtn
          path={user !== null ? "/dashboard/availableunits" : "/properties"}
        />
        <div className="one">
          <LargeTextStyles>Boston family home</LargeTextStyles> 
          <LargeBtn
            clickAction={() => console.log("clicked")}
            text="Book now"
          />
        </div>
        <div className="two">
          <p>picture grid or slider</p>
        </div>
        <div className="three">
          <p>property overview</p>
        </div>
      </HouseDetailsStyles>
    </MiniSection>
  );
};

export interface IPath {
  path: string;
}
export const BackBtn: FunctionComponent<IPath> = ({ path }) => {
  const router = useRouter();
  return (
    <BackBtnStyles onClick={() => router.push(path)}>
      <BackIcon />
      <p>Back</p>
    </BackBtnStyles>
  );
};
