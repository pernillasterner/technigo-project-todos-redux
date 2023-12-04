import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isProjectOpen: false,
  isModalOpen: false,
  taskId: null,
  prodId: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    openProjectModal(state) {
      state.isProjectOpen = true;
    },
    closeProjectModal(state) {
      state.isProjectOpen = false;
    },
    openEditModal(state, action) {
      const { id, type } = action.payload;

      if (type === "task") {
        state.taskId = id;
      } else {
        state.prodId = id;
      }

      state.isModalOpen = true;
    },
    closeEditModal(state) {
      state.isModalOpen = false;
      state.taskId = null;
      state.prodId = null;
    },
  },
});

export const {
  openModal,
  closeModal,
  openEditModal,
  closeEditModal,
  openProjectModal,
  closeProjectModal,
} = modalSlice.actions;

export default modalSlice.reducer;
