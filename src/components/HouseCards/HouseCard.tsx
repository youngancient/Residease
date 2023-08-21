import { HouseCardStyles } from "@/styles/ComponentStyles/HouseCardStyles";
import Image from "next/image";
import { FunctionComponent } from "react";
import { AreaIcon, BedroomIcon, LocationIcon } from "../Icons/HeroIcons";

export const HouseCard = () => {
  return (
    <HouseCardStyles>
      <div className="img">
      <Image src="/house1.jpeg" width={164} height={104} alt="house" className="mobile" />
      <Image src="/house1.jpeg" width={230} height={140} alt="house" className="tab" />
      <Image src="/house1.jpeg" width={340} height={226} alt="house" className="desktop" />
      </div>
      <div className="head">
        <h4>Boston family home</h4>
        <p>
          A beautiful townhouse in the heart of Miami’s down town district. With
          3 bedrooms and a heated pool.
        </p>
      </div>
      <div className="two">
        <div className="x">
          <LocationIcon />
          <span>Boston</span>
        </div>
        <div className="x">
          <BedroomIcon />
          <span>5 Bedroom</span>
        </div>
        <div className="x">
          <AreaIcon />
          <span>Villa</span>
        </div>
      </div>
      <button type="button">View Listing Details</button>
    </HouseCardStyles>
  );
};
