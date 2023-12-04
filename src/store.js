import { configureStore, combineReducers } from "@reduxjs/toolkit";

import taskReducer from "./reducers/task/taskSlice";
import modalReducer from "./reducers/modal/modalSlice";
import projectReducer from "./reducers/project/projectSlice";
import filterReducer from "./reducers/filter/filterSlice";

const reducer = combineReducers({
  task: taskReducer,
  modal: modalReducer,
  filter: filterReducer,
  project: projectReducer,
});

export const store = configureStore({
  reducer: reducer,
});
