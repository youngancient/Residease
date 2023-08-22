
import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/User"
import { RootState } from "./store";
import { Jude } from "../../constants/User";


export interface InitialState{
    user : IUser | null;
}

const initialState : InitialState ={
    user : Jude,
}

export const userSlice = createSlice({
    name : "data",
    initialState,
    reducers:{
        setUser : (state,{payload})=>{
            state.user = payload;
        }
    }
});


export const userSelector = (state: RootState) => state.user;

export const {setUser} = userSlice.actions;

export default userSlice.reducer;