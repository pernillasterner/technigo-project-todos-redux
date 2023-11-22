import styled from "styled-components";

const AddTaskWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  display: flex;
  align-items: center;
  padding: var(--general-smaller-padding);
  border-radius: var(--border-radius-small);
`;

const AddSign = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  margin-right: 0.6em;
`;

export const AddTask = () => {
  return (
    <AddTaskWrapper className="add-task_wrapper">
      <AddSign>＋</AddSign>
      <h5>Add Task</h5>
    </AddTaskWrapper>
  );
};
