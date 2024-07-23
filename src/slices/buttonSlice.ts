import { createSlice } from "@reduxjs/toolkit";
import buttons from "../data.json"

const initState = {buttons:buttons.buttons};

const buttonSlice=createSlice({
    name:'buttons',
    initialState: initState,
    reducers:{}
    }
)
export default buttonSlice.reducer;