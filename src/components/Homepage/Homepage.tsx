import { HeroStyles, ListHousesStyles, SearchStyles } from "@/styles/ComponentStyles/Herostyles";
import { SearchIcon } from "../Icons/HeaderIcons";
import { WideSearch } from "../Icons/HeroIcons";
import { FunctionComponent } from "react";
import { HouseListComp } from "../HouseCards/HouseList";
import { motion } from "framer-motion";
import { h1Variants, heroPVariants, secH1Variants } from "@/animations/homepage";
import { useAppSelector } from "@/redux/hooks/hook";
import { dataSelector } from "@/redux/dataSlice";

export const Hero = () => {
  return (
    <HeroStyles>
      <div className="h1">
        <div className="head">
          <motion.h1
          variants={h1Variants}
          initial ="initial"
          whileInView= "final"
          >“Let’s find a home</motion.h1>
          <motion.h1
          variants={secH1Variants}
          initial ="initial"
          whileInView= "final"
          >that’s perfect for you.</motion.h1>
        </div>
        <div className="hero-text">
          <motion.p
          variants={heroPVariants}
          initial ="initial"
          whileInView= "final"
          >
            Yes! you heard right Readiease is a platform that finds the best
            suitable home stress free with a click. We make you smile! Entrust
            your smile to us.
          </motion.p>
        </div>
      </div>
      <SearchComponent />
    </HeroStyles>
  );
};

export const SearchComponent = () => {
  // work on search function here
  // this search leads them to the property page
  return (
    <SearchStyles>
      <input
        type="text"
        name="query"
        placeholder="Want to start your search?  Enter an address, neighbourhood, city or ZIP Code"
        id=""
      />
      <button type="submit">
        <p>Find Comfort</p>
        <WideSearch />
      </button>
    </SearchStyles>
  );
};

export const ListHouses = () => {
  const {allHouses} = useAppSelector(dataSelector);
  // reduce the number of houses to max 6!
  return (
    <ListHousesStyles>
      <div className="one">
      <h2>Your choice, your pick!</h2>
      <p className="desc">
        Yes! you heard right Readiease is a platform that finds the best
        suitable home stress free with a click. We make you smile! Entrust your
        smile to us.
      </p>
      </div>
      <HouseListComp houses={allHouses} />
    </ListHousesStyles>
  );
};
