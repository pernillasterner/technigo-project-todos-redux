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
      const {
        id,
        title,
        content,
        tag,
        due_date,
        created_at,
        category,
        prodId,
      } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);

      if (existingTask) {
        if (tag) {
          if (!existingTask.tags) {
            // If the cat doesn't exist add that tags array
            existingTask.tags = [tag];
          } else if (tag.length !== 0) {
            // Update the tags array with the new tag
            existingTask.tags.push(tag);
          }
        }
        if (category) {
          existingTask.category = category;
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
        if (prodId) {
          existingTask.prodId = prodId;
        }
      } else {
        const newTask = {
          id: id,
          title: title,
          created_at: created_at,
          content: content,
          tags: tag ? [tag] : [],
          category: category,
          due_date: due_date,
          completed: false,
          prodId: prodId,
        };
        state.tasks.push(newTask);
      }
    },
  },
});

export const { clearTasks, addTask, removeTask, markCompleted, editTask } =
  taskSlice.actions;

export default taskSlice.reducer;
