import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../styles/Select";
import { filterProjects } from "../../reducers/filter/filterSlice";

export const Project = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.task.tasks);
  const projects = useSelector((store) => store.project.projects);

  const handleProject = (e) => {
    e.preventDefault();
    const option = e.target.value;
    dispatch(filterProjects(option));
  };

  return (
    <>
      {tasks.length !== 0 && (
        <>
          <label htmlFor="projects" className="is-hidden">
            Projects
          </label>
          <Select id="projects" name="filter" onChange={handleProject}>
            <option value="all">all projects</option>
            {projects.map((project) => (
              <option key={project.id} value={project.prodId}>
                {project.title}
              </option>
            ))}
          </Select>
        </>
      )}
    </>
  );
};
