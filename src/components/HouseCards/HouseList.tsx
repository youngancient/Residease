import { FunctionComponent } from "react";
import { HouseCard } from "./HouseCard";
import { HouseListCompStyles } from "@/styles/ComponentStyles/HouseCardStyles";
import { IHouse } from "../../../types/House";

interface IHouseList {
  houses: IHouse[] | null;
}
export const HouseListComp: FunctionComponent<IHouseList> = ({ houses }) => {
  return (
    <HouseListCompStyles>
      {houses !== null &&
        houses.map((ele, index) => (
          <HouseCard
            key={index}
            name={ele.name}
            area={ele.area}
            location={ele.location}
            id={ele.id}
            imgSrc={ele.imgSrc}
            bedroomNumber={ele.bedroomNumber}
          />
        ))}
    </HouseListCompStyles>
  );
};
