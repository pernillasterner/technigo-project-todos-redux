import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "../../reducers/filter/filterSlice";
import { Select } from "../../styles/Select";

export const Filter = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.task.tasks);

  const handleFilter = (e) => {
    const option = e.target.value;
    dispatch(filterTasks(option));
  };

  return (
    <>
      {tasks.length !== 0 && (
        <>
          <label htmlFor="task" className="is-hidden" aria-label>
            Task
          </label>
          <Select id="task" name="filter" onChange={handleFilter}>
            <option value="all">all tasks</option>
            <option value="uncompleted">uncompleted</option>
            <option value="completed">completed</option>
          </Select>
        </>
      )}
    </>
  );
};
