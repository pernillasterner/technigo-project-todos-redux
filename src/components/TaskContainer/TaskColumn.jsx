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

  position: relative;
  //max-height: 1500px; /* Set a max height to enable scrolling */
  overflow-y: auto;
`;

export const TaskColumn = ({ title, tasks, total }) => {
  return (
    <StyledTaskColumn className="task_column">
      <TopCard title={title} total={total} />

      {title !== "completed" ? (
        <>
          <AddTaskCard tasks={tasks} title={title} />
        </>
      ) : (
        <ClearTasks tasks={tasks} />
      )}

      {tasks &&
        tasks.map((task, index) => (
          <TaskCard key={`card_${index}`} task={task} />
        ))}
    </StyledTaskColumn>
  );
};
