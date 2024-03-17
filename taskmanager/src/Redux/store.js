// import { configureStore } from "@reduxjs/toolkit";
// import boardsSlice from "./boardsSlice";


// const store = configureStore({
//     reducer: {
//         boards: boardsSlice.reducer,
//     }
// })

// export default store

import { configureStore } from '@reduxjs/toolkit';
import boardsSlice from './boardsSlice';
import { getFromLocalStorage } from "../Hooks/UseLocalStorage";

const initialState = getFromLocalStorage() || boardsSlice.initialState;
// console.log(getFromLocalStorage())
const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    },
    initialState,
});

export default store;
