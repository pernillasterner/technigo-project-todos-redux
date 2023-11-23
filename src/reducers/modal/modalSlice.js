import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isModalOpen: false,
  taskId: null,
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
    openEditModal(state, action) {
      state.taskId = action.payload;
      state.isModalOpen = true;
    },
    closeEditModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal, openEditModal, closeEditModal } =
  modalSlice.actions;

export default modalSlice.reducer;
