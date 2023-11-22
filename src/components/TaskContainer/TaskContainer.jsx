import { useDispatch, useSelector } from "react-redux";
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
  // TODO: Filter incompleted and completed tasks
  const tasks = useSelector((store) => store.task.tasks);
  const completedTasks = tasks.filter((task) => task.completed);
  const uncompletedTasks = tasks.filter((task) => !task.completed);

  return (
    <StyledTaskContainer className="task_container">
      <TaskColumn title="Uncompleted Tasks" tasks={uncompletedTasks} />
      <TaskColumn title="Completed Tasks" tasks={completedTasks} />
    </StyledTaskContainer>
  );
};

// const { cartItems, total, amount } = useSelector((store) => store.cart);
