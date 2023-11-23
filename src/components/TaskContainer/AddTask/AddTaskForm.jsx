import styled from "styled-components";
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

const SubmitBtn = styled.button.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-submit);
  color: var(--clr-white);
  border-radius: var(--border-radius-small);
  border: none;
  padding: var(--general-mini-padding);
  margin-top: 1em;
  font-weight: 700;
`;

const ErrorMsg = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  color: red;
  font-size: 0.8em;
`;

export const AddTaskForm = ({ tasks }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const isOpen = useSelector((store) => store.modal.isOpen);

  const created_at = new Date();
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
          created_at: "2023-02-02",
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
