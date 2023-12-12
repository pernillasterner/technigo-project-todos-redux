import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openEditModal } from "../../../reducers/modal/modalSlice";
import { IconPlus } from "../../../assets/Icons";

const NoTaskContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  padding: var(--general-padding);
  border-radius: var(--border-radius-small);
  background: #111;
  display: 1;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  align-items: center;
  display: flex;
  text-align: center;
  min-width: 1200px;

  &::before {
    content: "";
    background: linear-gradient(90deg, #85c571, #eda989, #fd9af5);
    position: absolute;
    border-radius: var(--border-radius-small);
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    z-index: -1;
  }
`;
const Content = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Colorful = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  color: transparent;

  &::before {
    content: "new adventure";
    background: linear-gradient(90deg, #85c571, #eda989, #fd9af5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const PlusSign = styled.img.attrs((props) => ({
  className: props.className || "",
}))`
  width: 100px;
  transition: filter 0.3s ease;
  cursor: pointer;
  transition: filter 0.3s ease;

  filter: invert(100%) sepia(0%) saturate(100%) hue-rotate(220deg)
    brightness(20%) contrast(100%);

  &:hover {
    filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg)
      brightness(119%) contrast(49%);
  }
`;

export const NoTasks = () => {
  const dispatch = useDispatch();

  const handleOpenNewTask = (e) => {
    e.preventDefault();
    dispatch(openEditModal({ type: "task" }));
  };

  return (
    <NoTaskContainer className="notask_container">
      <Content className="content">
        <h1>Great job 🎉</h1>
        <p>
          You've completed all your tasks. <br />
          Ready for a <Colorful className="colorful"></Colorful>?
        </p>
        <PlusSign
          src={IconPlus}
          alt="plus sign"
          onClick={(e) => handleOpenNewTask(e)}
        />
      </Content>
    </NoTaskContainer>
  );
};
