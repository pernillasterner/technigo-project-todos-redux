import { useDispatch } from "react-redux";
import { clearTasks } from "../../../reducers/task/taskSlice";
import styled from "styled-components";

// TODO: Make this a separate styling component
const ClearTaskWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background: linear-gradient(90deg, #f59d6f, #c4a0f7);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: var(--general-smaller-padding);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  margin: 15px 0;
  //   color: var(--clr-primary-dark);
  font-weight: 600;

  &:hover {
    background: linear-gradient(90deg, #c4a0f7, #f59d6f);
  }
`;

export const ClearTasks = ({ tasks }) => {
  const dispatch = useDispatch();
  const uncompletedTasks = tasks.some((task) => !task.completed);

  return (
    <>
      {uncompletedTasks && (
        <ClearTaskWrapper onClick={() => dispatch(clearTasks())}>
          Clear all tasks
        </ClearTaskWrapper>
      )}
    </>
  );
};
