import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "../../reducers/task/taskSlice";

const Select = styled.select.attrs((props) => ({
  className: props.className || "",
}))`
  background: var(--clr-primary-dark);
  color: var(--clr-white);
  border-radius: var(--border-radius-mini);
  border: 1px solid var(--clr-grey-5);
  width: fit-content;
  padding: var(--general-mini-padding);
  margin-right: 2em;
`;

export const Filter = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.task.tasks);

  const handleFilter = (e) => {
    const option = e.target.value;
    dispatch(filterTasks(option));
  };

  return (
    <>
      {tasks.length > 0 && (
        <Select name="filter" onChange={handleFilter}>
          <option value="all">all tasks</option>
          <option value="uncompleted">uncompleted</option>
          <option value="completed">completed</option>
        </Select>
      )}
    </>
  );
};
