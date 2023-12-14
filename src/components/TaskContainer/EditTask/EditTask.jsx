import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditModal } from "../../../reducers/modal/modalSlice";
import { editTask } from "../../../reducers/task/taskSlice";
import { editProjectTask } from "../../../reducers/project/projectSlice";
import { ModalBottom } from "./ModalBottom";
import { ModalTop } from "./ModalTop";
import { ModalContent } from "./ModalContent";
import { SubmitBtn } from "../../../styles/Buttons";
import { DatePicker } from "../../../utils/DatePicker";
import { IconClose } from "../../../assets/Icons";

const EditTaskContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00000075;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 567px) {
    padding: var(--general-smaller-padding) 10px;
  }
`;

const EditTaskBox = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  width: 600px;
  background: var(--clr-primary-light);
  border-radius: var(--border-radius-large);
  padding: var(--general-padding);
  position: relative;

  form {
    margin-top: 0.9em;
  }

  @media screen and (max-width: 567px) {
    width: 100%;
    padding: var(--general-smaller-padding) var(--general-mini-padding);
  }
`;

const CloseSign = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  width: 30px;
  filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(220deg)
    brightness(100%) contrast(100%);
  position: absolute;
  right: 35px;
  top: 20px;
  cursor: pointer;
  @media screen and (max-width: 567px) {
    right: 15px;
    top: 7px;
  }
`;

export const EditTask = ({ taskId, prodId, isTask }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.task.tasks);
  const projects = useSelector((store) => store.project.projects);

  // Use either task or prod based on isTask === true
  const taskOrProject = isTask
    ? tasks.find((task) => task.id === taskId)
    : projects.find((project) => project.prodId === prodId);

  const [formState, setFormState] = useState({
    id: taskOrProject?.id || taskOrProject?.prodId || 1,
    tag: taskOrProject?.tag || "",
    category: taskOrProject?.category || "",
    title: taskOrProject?.title || "",
    content: taskOrProject?.content || "",
    due_date: taskOrProject?.due_date || "",
    created_at: taskOrProject?.created_at || new Date().toISOString(),
  });

  const handleIsModalOpen = () => {
    dispatch(closeEditModal());
  };

  const handleInputChange = (inputValue) => {
    let { name, value } = inputValue;

    if (name === "prodId") {
      value = Number(value);
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditTask = (e) => {
    if (e) {
      e.preventDefault();
      // Dispatch the addTask action with the new task
      if (isTask) {
        dispatch(
          editTask({
            id: formState.id,
            title: formState.title,
            content: formState.content,
            created_at: new Date().toISOString(),
            tag: formState.tag,
            due_date: formState.due_date,
            category: formState.category,
            prodId: formState.prodId,
          })
        );
      } else {
        dispatch(
          editProjectTask({
            prodId: formState.id,
            title: formState.title,
            content: formState.content,
            created_at: new Date().toISOString(),
            tag: formState.tag,
            due_date: formState.due_date,
            category: formState.category,
          })
        );
      }

      dispatch(closeEditModal());
    }
  };
  return (
    <>
      {formState && (
        <EditTaskContainer>
          <EditTaskBox className="edit_box">
            <CloseSign onClick={handleIsModalOpen}>
              <IconClose />
            </CloseSign>
            <form>
              <ModalContent
                onInputChange={handleInputChange}
                title={formState?.title}
                content={formState?.content}
              />
              <ModalTop
                onInputChange={handleInputChange}
                currentCat={taskOrProject?.category}
                prodId={taskOrProject?.prodId}
                id={taskOrProject?.id}
              />
              <DatePicker
                onInputChange={handleInputChange}
                due_date={formState?.due_date}
              />
              <SubmitBtn
                onClick={(e) => handleEditTask(e)}
                className="submit-btn"
              >
                Save changes
              </SubmitBtn>
            </form>
            <ModalBottom
              key={`bottom-${taskOrProject?.id}`}
              created_at={formState?.created_at}
              id={taskOrProject?.id}
              prodId={taskOrProject?.prodId}
            />
          </EditTaskBox>
        </EditTaskContainer>
      )}
    </>
  );
};
