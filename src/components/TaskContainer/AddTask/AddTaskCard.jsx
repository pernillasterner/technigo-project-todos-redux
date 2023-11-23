import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../reducers/modal/modalSlice";
import { AddTaskForm } from "./AddTaskForm";

const AddTaskWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: var(--general-smaller-padding);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  margin: 15px 0;
`;

const AddTask = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  align-items: center;
`;

const AddSign = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  margin-right: 0.6em;
`;

export const AddTaskCard = ({ tasks }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.modal.isOpen);

  const toggleAddSign = (e) => {
    e.preventDefault();
    // Dispatch the openModal to open addTaskForm
    if (!isOpen) {
      dispatch(openModal());
    } else {
      dispatch(closeModal());
    }
  };

  return (
    <AddTaskWrapper className="add-task_wrapper">
      <AddTask onClick={(e) => toggleAddSign(e)}>
        <AddSign>{!isOpen ? "+" : "-"}</AddSign>
        <h5>Add Task</h5>
      </AddTask>
      <AddTaskForm tasks={tasks} />
    </AddTaskWrapper>
  );
};
