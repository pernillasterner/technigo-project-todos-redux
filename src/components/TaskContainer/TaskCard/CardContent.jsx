import { useDispatch } from "react-redux";
import { markCompleted } from "../../../reducers/task/taskSlice";
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
`;

const CardDeadline = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 0.9rem;
  background-color: #f37272;
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
  margin-top: 1.7em;
  padding: 0.2em 0;

  &:hover {
    background-color: #ffffff40;
  }
`;
// Boolean is not workin without this
CompleteButton.shouldForwardProp = (prop) => prop !== "completed";

export const CardContent = ({ title, due_date, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <Content className="content">
      <CardH5 className="card_title">{title}</CardH5>
      {due_date && <CardDeadline>⏱️ {due_date}</CardDeadline>}
      <CompleteButton
        onClick={() => dispatch(markCompleted(id))}
        completed={completed}
      >
        {completed ? "completed" : "complete"}
      </CompleteButton>
    </Content>
  );
};
