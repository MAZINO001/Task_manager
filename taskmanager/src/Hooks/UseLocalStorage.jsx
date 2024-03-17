import { boardsSlice } from "../Redux/boardsSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("boards", JSON.stringify(store.getState().boards));
};

export default localStorageMiddleware;
