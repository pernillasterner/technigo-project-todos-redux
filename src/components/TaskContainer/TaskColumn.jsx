import { AddTaskCard } from "./AddTask/AddTaskCard";
import { ClearTasks } from "./ClearTasks/ClearTasks";
import { TaskCard } from "./TaskCard/TaskCard";
import { TopCard } from "./TopCard";
import styled from "styled-components";

const StyledTaskColumn = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  width: 375px;
  flex-direction: column;
  position: relative;
  //max-height: 1500px; /* Set a max height to enable scrolling */
  overflow-y: auto;
  margin-top: 0;

  &:nth-child(2) {
    margin: 0 0.7em;
    @media screen and (max-width: 863px) {
      margin: 0;
    }
    @media screen and (max-width: 767px) {
      margin: 1em 0;
    }
  }

  @media screen and (max-width: 567px) {
    width: 100%;
  }
`;

const TaskInnerColumn = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const TaskColumn = ({ title, tasks, total }) => {
  return (
    <StyledTaskColumn className="task_column">
      <TopCard title={title} total={total} />
      <TaskInnerColumn id={title}>
        {title !== "completed" ? (
          <AddTaskCard tasks={tasks} title={title} />
        ) : (
          <ClearTasks tasks={tasks} />
        )}

        {tasks &&
          tasks.map((task, index) => (
            <TaskCard key={`card_${index}`} task={task} />
          ))}
      </TaskInnerColumn>
    </StyledTaskColumn>
  );
};
