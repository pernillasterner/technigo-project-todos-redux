import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { markCompleted, removeTask } from "../../../reducers/task/taskSlice";
import { removeProject } from "../../../reducers/project/projectSlice";
import styled from "styled-components";

const Content = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CardH5 = styled.h5.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 1.1rem;
  padding: 0.2rem 0;
`;

const CardText = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 0.8rem;
`;

const CardDeadline = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 0.9rem;
  background-color: ${(props) => props.dueDate};
  width: fit-content;
  font-size: 0.8rem;
  padding: 0.3em 0.8em;
  border-radius: var(--border-radius-small);
  margin-top: 0.5em;
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

export const CardContent = ({
  title,
  due_date,
  completed,
  id,
  text,
  prodId,
}) => {
  const dispatch = useDispatch();
  const currentData = new Date();
  const formattedData = currentData.toISOString().split("T")[0];
  const [dueDate, setDueDate] = useState("var(--clr-grey-5)");
  const [isAllTasksCompleted, setIsAllTasksCompleted] = useState(false);
  const tasks = useSelector((store) => store.task.tasks);

  useEffect(() => {
    if (formattedData > due_date) {
      setDueDate("var(--clr-alert)");
    } else {
      setDueDate("var(--clr-grey-5)");
    }
  }, [formattedData, due_date]);

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

  return (
    <Content className="content">
      <CardH5 className="card_title">{title}</CardH5>
      <CardText>{text}</CardText>
      {due_date && <CardDeadline dueDate={dueDate}>⏱️ {due_date}</CardDeadline>}

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
    </Content>
  );
};
