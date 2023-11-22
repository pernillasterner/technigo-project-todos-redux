import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../../data/tasks";

const initialState = {
  tasks: [],
  total: 0,
  isLoading: true,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },
    addTask: (state, action) => {
      state.tasks += action.payload;
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      // Removes a specific item from the task list using the id
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { clearTasks, addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;

// ACTIONS
/**
 *  {type: 'todos/todoAdded', payload: todoText}
    {type: 'todos/todoToggled', payload: todoId}
    {type: 'todos/colorSelected', payload: {todoId, color}}
    {type: 'todos/todoDeleted', payload: todoId}
    {type: 'todos/allCompleted'}
    {type: 'todos/completedCleared'}
    {type: 'filters/statusFilterChanged', payload: filterValue}
    {type: 'filters/colorFilterChanged', payload: {color, changeType}}
 */
