// import { configureStore } from "@reduxjs/toolkit";
// import boardsSlice from "./boardsSlice";


// const store = configureStore({
//     reducer: {
//         boards: boardsSlice.reducer,
//     }
// })

// export default store


// store.js

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { boardsReducer } from "./boardsSlice";
import localStorageMiddleware from "./middleware";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, boardsReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(localStorageMiddleware),
});

export default store;
