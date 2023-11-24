import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../../data/tasks";

const initialState = {
  tasks: tasks,
  content: "",
  categories: [],
  completed: false,
  created_at: null,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
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
    editTask: (state, action) => {
      // If cat push the new cat to current object
      const { id, title, category } = action.payload;

      // Check if the task with the given id already exists
      const taskIndex = state.tasks.find((task) => task.id === id);
      const existingTask = state.tasks.find((task) => task.id === id);

      if (existingTask) {
        // If the task exists, update its properties
        if (!existingTask.categories) {
          // If the cat doesn't exist add that categories array
          existingTask.categories = [category];
        } else {
          // Update the categories array with the new category
          existingTask.categories.push(category);
        }
      }
    },
  },
});

export const { clearTasks, addTask, removeTask, markCompleted, editTask } =
  taskSlice.actions;

export default taskSlice.reducer;

// ACTIONS
/**
 *  {type: 'todos/todoAdded', payload: todoText} ✅
    {type: 'todos/todoToggled', payload: todoId} ✅
    {type: 'todos/colorSelected', payload: {todoId, color}}
    {type: 'todos/todoDeleted', payload: todoId} ✅
    {type: 'todos/allCompleted'} ✅
    {type: 'todos/completedCleared'} ✅
    {type: 'filters/statusFilterChanged', payload: filterValue}
    {type: 'filters/colorFilterChanged', payload: {color, changeType}}
 */
