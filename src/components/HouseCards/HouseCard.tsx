import { HouseCardStyles } from "@/styles/ComponentStyles/HouseCardStyles";
import Image from "next/image";
import { FunctionComponent } from "react";
import { AreaIcon, BedroomIcon, LocationIcon } from "../Icons/HeroIcons";
import { IHouse } from "../../../types/House";
import { useRouter } from "next/router";

export const HouseCard: FunctionComponent<IHouse> = ({
  name,
  id,
  imgSrc,
  area,
  location,
  bedroomNumber,
  type
}) => {
  const router = useRouter();
  return (
    <HouseCardStyles>
      <div className="img">
        <Image
          src={imgSrc}
          width={164}
          height={120}
          alt="house"
          className="mobile"
        />
        <Image
          src={imgSrc}
          width={230}
          height={150}
          alt="house"
          className="tab"
        />
        <Image
          src={imgSrc}
          width={340}
          height={240}
          alt="house"
          className="desktop"
        />
      </div>
      <div className="head">
        <div className="headies">
          <h4>{name}</h4>
          <span>{type}</span>
        </div>
        <p>
          A beautiful townhouse in the heart of Miami’s down town district. With{" "}
          {bedroomNumber} bedrooms and a heated pool.
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
      <button
        type="button"
        onClick={() => router.push(`/dashboard/availableunits/${id}`)}
      >
        View Listing Details
      </button>
    </HouseCardStyles>
  );
};
