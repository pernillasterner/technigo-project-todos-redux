import { configureStore, combineReducers } from "@reduxjs/toolkit";

import taskReducer from "./reducers/task/taskSlice";
// import { projects } from "./reducers/projects";
// import { filters } from "./reducers/filters";

const reducer = combineReducers({
  task: taskReducer,
  // projects: projects.reducer,
  // filters: filters.reducer,
});

export const store = configureStore({
  reducer: reducer,
});
