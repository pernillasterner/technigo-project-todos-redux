import { TaskCard } from "./TaskCard";
import { TopCard } from "./TopCard";
import styled from "styled-components";

const StyledTaskColumn = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  flex-direction: column;
`;

export const TaskColumn = () => {
  return (
    <StyledTaskColumn className="task_column">
      <TopCard />
      <TaskCard />
    </StyledTaskColumn>
  );
};
