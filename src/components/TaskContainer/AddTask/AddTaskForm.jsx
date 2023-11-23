import styled from "styled-components";
import { SubmitBtn } from "../../../styles/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { closeModal } from "../../../reducers/modal/modalSlice";
import { addTask } from "../../../reducers/task/taskSlice";

const TaskForm = styled.form.attrs((props) => ({
  className: props.className || "",
}))`
  margin-right: 0.6em;
  padding: 0.5em 0;
  width: 100%;
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
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  // Get the last id of task array, add id to new task
  const lastTaskId =
    tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;
  const newTaskId = lastTaskId + 1;

  const handleAddTask = () => {
    if (value) {
      // Dispatch the addTask action with the new task
      dispatch(
        addTask({
          id: newTaskId,
          title: value,
          completed: false,
          created_at: new Date().toString(),
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
            placeholder="Give this task a name"
            required
            onChange={(e) => setValue(e.target.value)}
          />
          {errorMessage && (
            <ErrorMsg className="error_message">
              You need to add a task
            </ErrorMsg>
          )}
          <SubmitBtn onClick={handleAddTask}>Save changes</SubmitBtn>
        </TaskForm>
      )}
    </>
  );
};
