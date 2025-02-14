import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  openProjectModal,
  closeProjectModal,
} from "../../../reducers/modal/modalSlice";
import { AddTaskForm } from "./AddTaskForm";
import { AddProjectForm } from "./AddProjectForm";

const AddTaskWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: var(--general-mini-padding);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  margin: 15px 0;
  @media screen and (max-width: 767px) {
    margin: 5px 0;
  }
`;

const AddTask = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  align-items: center;
  p {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`;

const AddSign = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  margin-right: 0.6em;
`;

export const AddTaskCard = ({ tasks, title }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.modal.isOpen);
  const isProjectOpen = useSelector((store) => store.modal.isProjectOpen);

  const toggleTaskAddSign = (e) => {
    e.preventDefault();
    if (!isOpen) {
      dispatch(openModal());
    } else {
      dispatch(closeModal());
    }
  };

  const toggleProjectAddSign = (e) => {
    e.preventDefault();
    if (!isProjectOpen) {
      dispatch(openProjectModal());
    } else {
      dispatch(closeProjectModal());
    }
  };

  return (
    <AddTaskWrapper className="add-task_wrapper">
      {title !== "projects" ? (
        <>
          <AddTask onClick={(e) => toggleTaskAddSign(e)}>
            <AddSign>{!isOpen ? "+" : "-"}</AddSign>
            <p> Add Task</p>
          </AddTask>
          <AddTaskForm tasks={tasks} />
        </>
      ) : (
        <>
          <AddTask onClick={(e) => toggleProjectAddSign(e)}>
            <AddSign>{!isProjectOpen ? "+" : "-"}</AddSign>
            <p>Add Project</p>
          </AddTask>
          <AddProjectForm />
        </>
      )}
    </AddTaskWrapper>
  );
};
