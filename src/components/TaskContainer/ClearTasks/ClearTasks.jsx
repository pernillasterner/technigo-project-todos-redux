import { useDispatch } from "react-redux";
import { useState } from "react";
import { clearTasks } from "../../../reducers/task/taskSlice";
import ClearAllIcon from "../../../../public/icons/clear_all_icon.svg";
import styled from "styled-components";

// TODO: Make this a separate styling component
const ClearTaskWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background: linear-gradient(90deg, #f59d6f, #c4a0f7);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: var(--general-mini-padding);
  border-radius: var(--border-radius-small);
  cursor: pointer;
  margin: 10px 0;
  font-weight: 600;
  position: fixed;
  bottom: 0;
  left: 10px;
  width: 58px
  height: 58px;

  &:hover {
    background: linear-gradient(90deg, #c4a0f7, #f59d6f);
  }

  &::before {
    content: url(${ClearAllIcon});
  }

`;

const ConfirmClearAllTasks = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background: linear-gradient(90deg, #f59d6f, #c4a0f7);
  border-radius: var(--border-radius-small);
  padding: var(--general-padding);
  width: 400px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.show ? "block" : "none")};
  text-align: center;
  transition: 0.5s ease-in-out;

  p {
    text-align: center;
    color: var(--clr-primary-dark);
    color: white;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const ConfirmClearBtn = styled.button.attrs((props) => ({
  className: props.className || "",
}))`
  width: 100px;
  padding: 10px;

  margin-right: 10px;
  transition: 0.5s ease-in-out;
  border: 1px solid transparent;
  border-radius: var(--border-radius-small);

  &.confirm {
    background-color: white;
    color: black;
    &:hover {
      background-color: #ffffff60;
      color: white;
    }
  }

  &.not-confirm {
    background-color: black;
    color: white;
    &:hover {
      background-color: #00000060;
      color: black;
    }
  }
`;

export const ClearTasks = ({ tasks }) => {
  const dispatch = useDispatch();
  const uncompletedTasks = tasks.some((task) => !task.completed);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClearAllTasks = () => {
    // Display modal
    setShowConfirmModal(true);
  };

  const confirmClearAllTasks = () => {
    // Clear all tasks
    dispatch(clearTasks());
    // Hide modal
    setShowConfirmModal(false);
  };

  const cancelClearAllTasks = () => {
    // Hide modal
    setShowConfirmModal(false);
  };

  return (
    <>
      {uncompletedTasks && (
        <>
          <ClearTaskWrapper
            onClick={() => handleClearAllTasks()}
          ></ClearTaskWrapper>
          <ConfirmClearAllTasks show={showConfirmModal}>
            <p>Are you sure you want to clear all tasks?</p>

            <ConfirmClearBtn className="confirm" onClick={confirmClearAllTasks}>
              Yes
            </ConfirmClearBtn>
            <ConfirmClearBtn
              className="not-confirm"
              onClick={cancelClearAllTasks}
            >
              No
            </ConfirmClearBtn>
          </ConfirmClearAllTasks>
        </>
      )}
    </>
  );
};
