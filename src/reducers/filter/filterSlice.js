import { createSlice } from "@reduxjs/toolkit";
// import { categories } from "../../data/categories";

const initialState = {
  option: "all",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterTasks: (state, action) => {
      state.option = action.payload;
      //   const tasks = useSelector((store) => store.task.tasks);
      // const { option, tasks } = action.payload;
      // if (option === "uncompleted") {
      //   state.filterTasks = tasks.filter((task) => !task.completed);
      // } else if (option === "completed") {
      //   state.filterTasks = tasks.filter((task) => task.completed);
      // } else if (option === "all") {
      //   state.filterTasks = [];
      // }
    },
  },
});

export const { filterTasks } = filterSlice.actions;

export default filterSlice.reducer;
