import { HeroStyles, SearchStyles } from "@/styles/ComponentStyles/Herostyles";
import { SearchIcon } from "../Icons/HeaderIcons";
import { WideSearch } from "../Icons/HeroIcons";

export const Hero = () => {
  return (
    <HeroStyles>
      <div className="h1">
        <div className="head">
          <h1>“Let’s find a home</h1>
          <h1>that’s perfect for you.</h1>
        </div>
        <div className="hero-text">
          <p>
            Yes! you heard right Readiease is a platform that finds the best
            suitable home stress free with a click. We make you smile! Entrust
            your smile to us.
          </p>
        </div>
      </div>
      <SearchComponent />
    </HeroStyles>
  );
};

export const SearchComponent = () => {
  return (
    <SearchStyles>
      <input type="text" name="query" placeholder="Want to start your search?  Enter an address, neighbourhood, city or ZIP Code" id="" />
      <button type="submit">
        <p>Find Comfort</p>
        <WideSearch />
      </button>
    </SearchStyles>
  );
};
