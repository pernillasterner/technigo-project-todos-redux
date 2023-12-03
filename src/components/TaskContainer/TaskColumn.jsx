import { AddTaskCard } from "./AddTask/AddTaskCard";
import { ClearTasks } from "./ClearTasks/ClearTasks";
import { TaskCard } from "./TaskCard/TaskCard";
import { TopCard } from "./TopCard";
import styled from "styled-components";

const StyledTaskColumn = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  flex-direction: column;
  padding-left: var(--general-padding);
`;

export const TaskColumn = ({ title, tasks, total }) => {
  return (
    <StyledTaskColumn className="task_column">
      <TopCard title={title} total={total} />
      {title === "uncompleted" && (
        <>
          <ClearTasks tasks={tasks} />
          <AddTaskCard tasks={tasks} />
        </>
      )}

      {tasks && tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </StyledTaskColumn>
  );
};
