import { TaskColumn } from "./TaskColumn";
import styled from "styled-components";

const StyledTaskContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  padding: var(--general-padding);
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
`;

export const TaskContainer = () => {
  return (
    <StyledTaskContainer className="task_container">
      <TaskColumn />
    </StyledTaskContainer>
  );
};
