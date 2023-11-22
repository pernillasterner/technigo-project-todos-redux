import styled from "styled-components";
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
  return (
    <AddTaskWrapper
      className="add-task_wrapper"
      onClick={(e) => toggleAddSign(e)}
    >
      <AddTask>
        <AddSign>＋</AddSign>
        <h5>Add Task</h5>
      </AddTask>
      <AddTaskForm tasks={tasks} />
    </AddTaskWrapper>
  );
};
