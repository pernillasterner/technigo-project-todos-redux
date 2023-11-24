import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../../reducers/modal/modalSlice";
import { editTask } from "../../../reducers/task/taskSlice";
import { ModalBottom } from "./ModalBottom";
import { ModalTop } from "./ModalTop";
import { ModalContent } from "./ModalContent";
import closeSign from "../../../../public/icons/close_icon.svg";
import { SubmitBtn } from "../../../styles/Buttons";
import { DatePicker } from "../../../utils/DatePicker";

const EditTaskContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #00000075;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditTaskBox = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  width: 600px;
  background: var(--clr-primary-light);
  border-radius: var(--border-radius-large);
  padding: var(--general-padding);
  position: relative;
`;

const CloseSign = styled.img.attrs((props) => ({
  className: props.className || "",
}))`
  width: 30px;
  filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(220deg)
    brightness(100%) contrast(100%);
  position: absolute;
  right: 35px;
  cursor: pointer;
`;

export const EditTask = ({ taskId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.task.tasks);
  const task = tasks.find((task) => task.id === taskId);

  const [formState, setFormState] = useState({
    category: task?.category || "",
    title: task?.title || "",
    content: task?.content || "",
    due_date: task?.due_date || "",
  });

  const handleInputChange = (inputValue) => {
    const { name, value } = inputValue;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditTask = (e) => {
    if (e) {
      e.preventDefault();
      // Dispatch the addTask action with the new task
      dispatch(
        editTask({
          id: task.id,
          title: formState.title,
          content: formState.content,
          created_at: new Date().toISOString(),
          category: formState.category,
          due_date: formState.due_date,
        })
      );
    } else {
      dispatch(closeEditModal());
    }
  };

  return (
    <>
      {formState && (
        <EditTaskContainer>
          <EditTaskBox className="edit_box">
            <CloseSign
              src={closeSign}
              alt="close"
              onClick={() => handleEditTask()}
            />
            <form>
              <ModalTop
                onInputChange={handleInputChange}
                cats={task.categories}
              />
              <ModalContent
                onInputChange={handleInputChange}
                title={formState.title}
                content={formState.content}
              />

              <DatePicker
                onInputChange={handleInputChange}
                due_date={formState.due_date}
              />
              <SubmitBtn
                onClick={(e) => handleEditTask(e)}
                className="submit-btn"
              >
                Save changes
              </SubmitBtn>
            </form>
            <ModalBottom
              key={`bottom-${task.id}`}
              created_at={task.created_at}
              id={task.id}
            />
          </EditTaskBox>
        </EditTaskContainer>
      )}
    </>
  );
};
