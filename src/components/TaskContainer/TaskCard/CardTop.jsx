import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { markCompleted, removeTask } from "../../../reducers/task/taskSlice";
import { removeProject } from "../../../reducers/project/projectSlice";
import { TagBtn, CatBtn } from "../../../styles/Buttons";
import { useState, useEffect } from "react";

const Top = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  position: relative;
  ${({ cat }) =>
    cat &&
    `
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
`}
`;

const Tag = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-right: 5px;
  > *:not(:first-child) {
    margin-left: 0px;
  }
`;

const CompleteButton = styled.span.attrs((props) => ({
  className: props.className || "",
  "data-completed": props.completed,
}))`
  cursor: pointer;
  width: 100%;
  border-radius: var(--border-radius-small);
  border: 1px solid
    ${(props) =>
      props.completed ? "var(--clr-completed)" : "var(--clr-uncompleted)"};
  color: ${(props) =>
    props.completed ? "var(--clr-completed)" : "var(--clr-uncompleted)"};
  text-align: center;
  margin: 1.7em 0;
  padding: 0.2em 0;

  &:hover {
    background-color: #ffffff40;
  }
`;
// Boolean is not workin without this
CompleteButton.shouldForwardProp = (prop) => prop !== "completed";

export const CardTop = ({ tags, cat, id, prodId, completed }) => {
  const dispatch = useDispatch();
  const [isAllTasksCompleted, setIsAllTasksCompleted] = useState(false);
  const tasks = useSelector((store) => store.task.tasks);

  useEffect(() => {
    const areAllTasksCompleted = () => {
      const numericProdId = Number(prodId);
      const filteredTasks = tasks.filter(
        (task) => task.prodId === numericProdId
      );

      if (!filteredTasks.length) {
        setIsAllTasksCompleted(false);
      } else {
        const allCompleted = filteredTasks.every((task) => task.completed);
        setIsAllTasksCompleted(allCompleted);
      }
    };

    if (prodId !== undefined) {
      areAllTasksCompleted();
    }
  }, [tasks, prodId]);

  const handleCompleted = () => {
    if (id !== undefined) {
      dispatch(markCompleted(id));
    } else if (prodId !== undefined) {
      dispatch(removeProject(prodId));

      const tasksToRemove = tasks.filter((task) => task.prodId == prodId);
      tasksToRemove.map((task) => {
        dispatch(removeTask(task.id));
      });

      dispatch(removeProject(prodId));
    }
  };
  // TODO: Click on tag and remove it

  return (
    <Top className="top" cat={cat}>
      {cat && <CatBtn className="cat">{cat}</CatBtn>}

      {id === undefined && isAllTasksCompleted && (
        <CompleteButton
          onClick={() => handleCompleted(prodId)}
          completed={true}
        >
          Complete All Projects
        </CompleteButton>
      )}
      {id !== undefined && (
        <CompleteButton onClick={handleCompleted} completed={completed}>
          {completed ? "completed" : "complete"}
        </CompleteButton>
      )}

      {/* <Tag className="tag">
        {tags && tags.map((tag, index) => <TagBtn key={index}>{tag}</TagBtn>)}
      </Tag> */}
    </Top>
  );
};
