import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      prodId: 1,
      title: "Task Manager App",
      created_at: "2023-11-23T17:56:05.455Z",
      completed: false,
      content:
        "Develop a comprehensive task management application to help users organize, prioritize, and track their tasks efficiently.",
      category: "development",
      tags: ["UI/UX", "Backend", "Frontend"],
    },
    {
      prodId: 2,
      title: "Blog Redesign",
      created_at: "2023-11-23T17:56:05.455Z",
      completed: false,
      content:
        "Redesign the company blog for an improved user experience and a modern look.",
      category: "design",
      tags: ["UI/UX", "Responsive Design", "Content Strategy"],
    },
  ],
};

export const projectSlice = createSlice({
  name: "projects",

  initialState,
  reducers: {
    clearProjects: (state) => {
      state.projects = [];
    },
    addProject: (state, action) => {
      // I should push title and id
      state.projects.push(action.payload);
    },
    removeProject: (state, action) => {
      const prodId = action.payload;
      // Removes a specific item from the task list using the id
      state.projects = state.projects.filter((prod) => prod.prodId !== prodId);
    },
    editProjectTask: (state, action) => {
      const { prodId, title, content, tag, due_date, created_at, category } =
        action.payload;

      const existingProject = state.projects.find(
        (prod) => prod.prodId === prodId
      );

      if (existingProject) {
        if (tag) {
          if (!existingProject.tags) {
            // If the tag doesn't exist add that tags array
            existingProject.tags = [tag];
          } else if (tag.length !== 0) {
            // Update the tags array with the new tag
            existingProject.tags.push(tag);
          }
        }
        if (category) {
          existingProject.category = category;
        }
        // TODO: Write better code here
        if (title) {
          existingProject.title = title;
        }
        if (content) {
          existingProject.content = content;
        }
        if (due_date) {
          existingProject.due_date = due_date;
        }
      } else {
        const newProject = {
          prodId: prodId,
          title: title,
          created_at: created_at,
          content: content,
          tags: tag ? [tag] : [],
          category: category,
          due_date: due_date,
          completed: false,
        };
        state.projects.push(newProject);
      }
    },
  },
});

export const {
  clearProjects,
  addProject,
  editProjectTask,
  removeProject,
  markProjectCompleted,
} = projectSlice.actions;

export default projectSlice.reducer;
