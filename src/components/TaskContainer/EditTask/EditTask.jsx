import styled from "styled-components";
import { DatePicker } from "../../../utils/DatePicker";
import { useDispatch } from "react-redux";
import { SubmitBtn } from "../../../styles/Buttons";
import { ModalBottom } from "./ModalBottom";
import { tasks } from "../../../data/tasks";
import { ModalTop } from "./ModalTop";
import { ModalContent } from "./ModalContent";
import { useState } from "react";
import { editTask } from "../../../reducers/task/taskSlice";
import closeSign from "../../../../public/icons/close_icon.svg";
import { closeEditModal } from "../../../reducers/modal/modalSlice";

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
  height: 500px;
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
  const [category, setCategory] = useState("");

  const task = tasks.find((task) => task.id === taskId);

  const handleCatChange = (newCat) => {
    setCategory(newCat);
  };

  const handleEditTask = (e) => {
    if (e) {
      e.preventDefault();
      // Dispatch the addTask action with the new task
      dispatch(
        editTask({
          id: task.id,
          title: task.title,
          completed: false,
          created_at: new Date().toISOString(),
          category: category,
        })
      );
      dispatch(closeModal());
      //   setErrorMessage(false);
      // Clear the input value
      //   setValue("");
    } else {
      //   setErrorMessage(true);
      //   TA BORT
      dispatch(closeEditModal());
      console.log("else funkar");
    }
  };
  return (
    <EditTaskContainer>
      <EditTaskBox className="edit_box">
        <CloseSign
          src={closeSign}
          alt="close"
          onClick={() => handleEditTask()}
        />
        <form>
          <ModalTop
            onCategoryChange={handleCatChange}
            categories={task.categories}
          />
          <ModalContent title={task.title} content={task.content} />
          <DatePicker />
          <SubmitBtn onClick={(e) => handleEditTask(e)}>Save changes</SubmitBtn>
        </form>
        <ModalBottom
          key={`bottom-${task.id}`}
          created_at={task.created_at}
          id={task.id}
        />
      </EditTaskBox>
    </EditTaskContainer>
  );
};
