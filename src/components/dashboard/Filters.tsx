import {
  FilterStyle,
  SearchInputStyle,
} from "@/styles/ComponentStyles/Dashboard/AllListingStyles";
import { CircleX, FilterIcon, SortIcon } from "../Icons/DashboardIcons";
import { SearchIcon } from "../Icons/HeaderIcons";
import { useState } from "react";

export const Filter = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <FilterStyle>
      <p>Filter by</p>
      <FilterIcon />
      {showDropdown && (
        <div className="dropdown">
          <span>dropdown item</span>
          <span>dropdown item</span>
          <span>dropdown item</span>
        </div>
      )}
    </FilterStyle>
  );
};

export const Sort = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <FilterStyle>
      <p>Sort by</p>
      <SortIcon />
      {showDropdown && (
        <div className="dropdown">
          <span>dropdown item</span>
          <span>dropdown item</span>
          <span>dropdown item</span>
        </div>
      )}
    </FilterStyle>
  );
};

export const SearchInput = () => {
  return (
    <SearchInputStyle>
      <SearchIcon />
      <input type="text" name="search" placeholder="search by name" id="" />
      <CircleX />
    </SearchInputStyle>
  );
};
