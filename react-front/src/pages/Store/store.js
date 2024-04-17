import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import logger from "redux-logger";
import boardReducer from "./boardSlice"

 const store = configureStore({
    reducer: {
      user: userReducer,
      boards: boardReducer,
    
    },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

export default store;