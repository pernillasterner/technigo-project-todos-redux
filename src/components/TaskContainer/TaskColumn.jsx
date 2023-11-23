import { AddTaskCard } from "./AddTask/AddTaskCard";
import { TaskCard } from "./TaskCard/TaskCard";
import { TopCard } from "./TopCard";
import styled from "styled-components";

const StyledTaskColumn = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  flex-direction: column;
`;

export const TaskColumn = ({ title, tasks, total }) => {
  const isCompleted = tasks.some((task) => task.completed);

  return (
    <StyledTaskColumn className="task_column">
      <TopCard title={title} total={total} />
      <TaskCard tasks={tasks} />
      {title === "uncompleted" && <AddTaskCard tasks={tasks} />}
    </StyledTaskColumn>
  );
};
