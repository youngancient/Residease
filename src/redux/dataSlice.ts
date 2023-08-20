import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/User"
import { RootState } from "./store";
import { IHouse } from "../../types/House";

export interface InitialState{
    allHouses : IHouse[] | null,
    isNavOpen : boolean;
}

const initialState : InitialState ={
    allHouses : null,
    isNavOpen : false,
}

export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers:{
        setIsNavOpen : (state,{payload})=>{
            state.isNavOpen = payload;
        }
    }
});


export const dataSelector = (state: RootState) => state.data;

export const {setIsNavOpen} = dataSlice.actions;

export default dataSlice.reducer;