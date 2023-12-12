import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../styles/Select";
import { filterCat } from "../../reducers/filter/filterSlice";

export const Category = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.task.tasks);
  const cats = useSelector((store) => store.filter.categories);

  const handleCat = (e) => {
    e.preventDefault();
    const selectedCat = e.target.value;
    dispatch(filterCat(selectedCat));
  };
  return (
    <>
      {tasks.length !== 0 && (
        <Select name="filter" onChange={handleCat}>
          <label htmlFor="category" className="is-hidden">
            Category
          </label>
          <option value="all">all categories</option>
          {cats.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      )}
    </>
  );
};
