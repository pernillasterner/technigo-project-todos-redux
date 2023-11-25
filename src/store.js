import { configureStore, combineReducers } from "@reduxjs/toolkit";

import taskReducer from "./reducers/task/taskSlice";
import modalReducer from "./reducers/modal/modalSlice";
// import { projects } from "./reducers/projects";

const reducer = combineReducers({
  task: taskReducer,
  modal: modalReducer,
  // projects: projects.reducer,
});

export const store = configureStore({
  reducer: reducer,
});
