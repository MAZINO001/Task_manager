// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import boardsSlice from './boardsSlice';
// import { getFromLocalStorage } from "../Hooks/UseLocalStorage";

// const persistConfig = {
//     key: 'kanbanData',
//     storage,
//     whitelist: ['boards'],
// };
// import { combineReducers } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   boards: boardsSlice.reducer, 
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // const initialState = getFromLocalStorage() || boardsSlice.initialState;
// const initialState = getFromLocalStorage();
// const store = configureStore({
//     reducer: {
//         boards: persistedReducer(boardsSlice.reducer),
//     },
//     initialState,
// });

// export const persistor = persistStore(store);
// export default { store, persistor };



import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";


const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    }
})

export default store
