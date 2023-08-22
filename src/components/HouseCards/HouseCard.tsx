import { HouseCardStyles } from "@/styles/ComponentStyles/HouseCardStyles";
import Image from "next/image";
import { FunctionComponent } from "react";
import { AreaIcon, BedroomIcon, LocationIcon } from "../Icons/HeroIcons";
import { IHouse } from "../../../types/House";

export const HouseCard:FunctionComponent<IHouse> = ({name, id, imgSrc, area, location, bedroomNumber}) => {
  return (
    <HouseCardStyles>
      <div className="img">
      <Image src={imgSrc} width={164} height={104} alt="house" className="mobile" />
      <Image src={imgSrc} width={230} height={140} alt="house" className="tab" />
      <Image src={imgSrc} width={340} height={226} alt="house" className="desktop" />
      </div>
      <div className="head">
        <h4>{name}</h4>
        <p>
          A beautiful townhouse in the heart of Miami’s down town district. With
           {" "}{bedroomNumber} bedrooms and a heated pool.
        </p>
      </div>
      <div className="two">
        <div className="x">
          <LocationIcon />
          <span>{location}</span>
        </div>
        <div className="x">
          <BedroomIcon />
          <span>{bedroomNumber} Bedroom</span>
        </div>
        <div className="x">
          <AreaIcon />
          <span>{area}</span>
        </div>
      </div>
      <button type="button">View Listing Details</button>
    </HouseCardStyles>
  );
};
