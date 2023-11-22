import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../../data/tasks";

const initialState = {
  tasks: tasks,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },
    addTask: (state, action) => {
      console.log(state.tasks);
      console.log(action.payload);
      // state.tasks += action.payload;
      // const newTask = action.payload;
      state.tasks.push(action.payload);
      // const newTask = action.payload;
      // state.tasks[newTask.id] = newTask;
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      // Removes a specific item from the task list using the id
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    markCompleted: (state, action) => {
      const taskId = action.payload;
      const taskToToggle = state.tasks.find((task) => task.id === taskId);
      if (taskToToggle) {
        taskToToggle.completed = !taskToToggle.completed;
      }
    },
  },
});

export const { clearTasks, addTask, removeTask, markCompleted } =
  taskSlice.actions;

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
