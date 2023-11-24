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
      const { id, title, content, category, due_date } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      console.log(due_date);
      if (existingTask) {
        if (category) {
          if (!existingTask.categories) {
            // If the cat doesn't exist add that categories array
            existingTask.categories = [category];
          } else if (category !== undefined) {
            // Update the categories array with the new category
            existingTask.categories.push(category);
          }
        }

        if (title) {
          existingTask.title = title;
        }

        if (content) {
          existingTask.content = content;
        }
        if (due_date) {
          existingTask.due_date = due_date;
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
