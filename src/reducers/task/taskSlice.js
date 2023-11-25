import { createSlice } from "@reduxjs/toolkit";
// import { tasks } from "../../data/tasks";

const initialState = {
  tasks: [],
  filterTasks: [],
  option: "all",
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
      const { id, title, content, category, due_date, created_at } =
        action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);

      if (existingTask) {
        if (category) {
          if (!existingTask.categories) {
            // If the cat doesn't exist add that categories array
            existingTask.categories = [category];
          } else if (category.length !== 0) {
            // Update the categories array with the new category
            existingTask.categories.push(category);
          }
        }
        // TODO: Write better code here
        if (title) {
          existingTask.title = title;
        }

        if (content) {
          existingTask.content = content;
        }
        if (due_date) {
          existingTask.due_date = due_date;
        }
      } else {
        const newTask = {
          id: id,
          title: title,
          created_at: created_at,
          content: content,
          categories: category ? [category] : [],
          due_date: due_date,
          completed: false,
        };
        state.tasks.push(newTask);
      }
    },
    filterTasks: (state, action) => {
      const option = action.payload;

      if (option === "uncompleted") {
        state.filterTasks = state.tasks.filter((task) => !task.completed);
      } else if (option === "completed") {
        state.filterTasks = state.tasks.filter((task) => task.completed);
      } else if (option === "all") {
        state.filterTasks = [];
      }
    },
  },
});

export const {
  clearTasks,
  addTask,
  removeTask,
  markCompleted,
  editTask,
  filterTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
