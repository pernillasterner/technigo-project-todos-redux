import styled from "styled-components";
import { SubmitBtn } from "../../../styles/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addProject } from "../../../reducers/project/projectSlice";
import { closeProjectModal } from "../../../reducers/modal/modalSlice";
import { DatePicker } from "../../../utils/DatePicker";
import { Select } from "../../../styles/Select";

const ProjectForm = styled.form.attrs((props) => ({
  className: props.className || "",
}))`
  margin-right: 0.6em;
  padding: 0.5em 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  select {
    width: 100%;
  }
`;

const ProjectInput = styled.input.attrs((props) => ({
  className: props.className || "",
}))`
  padding: 0.5em;
  width: 100%;
  color: var(--clr-white);
  background-color: var(--clr-primary-dark);
  font-weight: 700;
  border: none;
  border-radius: var(--border-radius-mini);
  outline: none;
  height: 70px;
`;

const ErrorMsg = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  color: red;
  font-size: 0.8em;
`;

export const AddProjectForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(false);
  const categories = useSelector((store) => store.filter.categories);
  const isProjectOpen = useSelector((store) => store.modal.isProjectOpen);
  const projects = useSelector((store) => store.project.projects);
  const [value, setValue] = useState("");
  const [formState, setFormState] = useState({
    title: String,
    due_date: String,
    category: String,
  });

  const lastProdId =
    projects.length > 0
      ? Math.max(...projects.map((project) => project.prodId))
      : 0;
  const newProdId = lastProdId + 1;

  const handleInputChange = (inputValue) => {
    const { name, value } = inputValue;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddProject = (e) => {
    e.preventDefault();

    if (value) {
      dispatch(
        addProject({
          prodId: newProdId,
          title: value,
          completed: false,
          due_date: formState.due_date,
          category: formState.category,
          created_at: new Date().toISOString(),
        })
      );
      dispatch(closeProjectModal());
      setErrorMessage(false);
      // Clear the input value
      setValue("");
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <>
      {isProjectOpen && (
        <ProjectForm>
          <ProjectInput
            type="text"
            placeholder="Enter project title"
            required
            onChange={(e) => setValue(e.target.value)}
          />
          {errorMessage && (
            <ErrorMsg className="error_message">
              You need to add a task
            </ErrorMsg>
          )}
          <Select name="category" onChange={(e) => handleInputChange(e.target)}>
            <option value="all">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
          <DatePicker
            onInputChange={handleInputChange}
            due_date={formState?.due_date}
          />
          <SubmitBtn onClick={handleAddProject} className="submit-btn">
            Save changes
          </SubmitBtn>
        </ProjectForm>
      )}
    </>
  );
};
