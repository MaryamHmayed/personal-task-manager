import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import logger from "redux-logger";
import boardReducer from "./boardSlice"
import taskReducer from "./taskSlice";

 const store = configureStore({
    reducer: {
      user: userReducer,
      boards: boardReducer,
      tasks: taskReducer,
    
    },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

export default store;