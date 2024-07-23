import { createSlice } from "@reduxjs/toolkit";

const initState = {counter:25};

const counterSlice=createSlice({
    name:'counter',
    initialState: initState,
    reducers:{
        add1:(state)=>{
            state.counter += 1;
        },
        add5:(state)=>{
            state.counter += 5;
        }
    }
})
export const{add1, add5}=counterSlice.actions;
export default counterSlice.reducer;