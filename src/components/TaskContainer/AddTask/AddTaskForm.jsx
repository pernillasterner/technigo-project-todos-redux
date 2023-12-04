import styled from "styled-components";
import { SubmitBtn } from "../../../styles/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closeModal } from "../../../reducers/modal/modalSlice";
import { addTask } from "../../../reducers/task/taskSlice";
import { DatePicker } from "../../../utils/DatePicker";
import { Select } from "../../../styles/Select";

const TaskForm = styled.form.attrs((props) => ({
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

const TaskInput = styled.input.attrs((props) => ({
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

export const AddTaskForm = ({ tasks }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store) => store.modal.isOpen);
  const categories = useSelector((store) => store.filter.categories);
  const projects = useSelector((store) => store.project.projects);
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    due_date: "",
    category: "",
    prodId: "",
  });

  // Get the last id of task array, add id to new task
  const lastTaskId =
    tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;
  const newTaskId = lastTaskId + 1;

  const handleInputChange = (inputValue) => {
    const { name, value } = inputValue;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (value) {
      // Dispatch the addTask action with the new task
      dispatch(
        addTask({
          id: newTaskId,
          title: value,
          completed: false,
          due_date: formState.due_date,
          category: formState.category,
          prodId: formState.prodId,
          created_at: new Date().toISOString(),
        })
      );
      dispatch(closeModal());
      setErrorMessage(false);
      // Clear the input value
      setValue("");
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <>
      {isOpen && (
        <TaskForm>
          <TaskInput
            type="text"
            placeholder="Enter task title"
            required
            onChange={(e) => setValue(e.target.value)}
          />
          {errorMessage && (
            <ErrorMsg className="error_message">
              You need to add a task
            </ErrorMsg>
          )}
          <Select name="prodId" onChange={(e) => handleInputChange(e.target)}>
            <option value="all">Select a project</option>
            {projects.map((prod) => (
              <option key={prod.prodId} value={prod.prodId}>
                {prod.title}
              </option>
            ))}
          </Select>
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
          <SubmitBtn onClick={handleAddTask} className="submit-btn">
            Save changes
          </SubmitBtn>
        </TaskForm>
      )}
    </>
  );
};
