import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/User";
import { RootState } from "./store";
import { IHouse } from "../../types/House";
import { Houses } from "../../constants/Houses";
import { ISlideImage } from "@/components/dashboard/HouseDetails";

export interface InitialState {
  allHouses: IHouse[] | null;
  filterHouses: IHouse[] | null;
  isNavOpen: boolean;
  query: string | null;
  slideImages: ISlideImage[] | null;
}

const initialState: InitialState = {
  allHouses: Houses,
  isNavOpen: false,
  query: null,
  filterHouses: Houses,
  slideImages: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setIsNavOpen: (state, { payload }) => {
      state.isNavOpen = payload;
    },
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    setFilterHouses: (state, { payload }) => {
      state.filterHouses = payload;
    },
    setSlideImages: (state, action:PayloadAction<ISlideImage[] | null>) => {
      state.slideImages = action.payload;
    },
  },
});

export const dataSelector = (state: RootState) => state.data;

export const { setIsNavOpen, setQuery, setFilterHouses, setSlideImages } =
  dataSlice.actions;

export default dataSlice.reducer;
