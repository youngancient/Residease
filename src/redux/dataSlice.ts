import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/User"
import { RootState } from "./store";
import { IHouse } from "../../types/House";
import { Houses } from "../../constants/Houses";

export interface InitialState{
    allHouses : IHouse[] | null,
    filterHouses : IHouse[] | null,
    isNavOpen : boolean;
    query : string | null;
}

const initialState : InitialState ={
    allHouses : Houses,
    isNavOpen : false,
    query : null,
    filterHouses : Houses,
}

export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers:{
        setIsNavOpen : (state,{payload})=>{
            state.isNavOpen = payload;
        },
        setQuery :(state,{payload}) =>{
            state.query = payload;
        },
        setFilterHouses:(state, {payload})=>{
            state.filterHouses = payload;
        }
    }
});


export const dataSelector = (state: RootState) => state.data;

export const {setIsNavOpen, setQuery ,setFilterHouses} = dataSlice.actions;

export default dataSlice.reducer;