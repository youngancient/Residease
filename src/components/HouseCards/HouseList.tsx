
import { FunctionComponent } from "react";
import { HouseCard } from "./HouseCard";
import { HouseListCompStyles } from "@/styles/ComponentStyles/HouseCardStyles";

export const HouseListComp:FunctionComponent =()=>{
    return(
      <HouseListCompStyles>
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </HouseListCompStyles>
    )
  }