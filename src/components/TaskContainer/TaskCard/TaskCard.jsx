import styled from "styled-components";
import { CardTop } from "./CardTop";
import { CardContent } from "./CardContent";
import { CardBottom } from "./CardBottom";
import projectColors from "../../../data/projectColors";

const CardWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background: ${(props) =>
    props.isProject ? "var(--clr-primary-light)" : props.projectColor};
  width: 375px;
  border-radius: var(--border-radius-large);
  margin: 15px 0;
  padding: var(--general-smaller-padding);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: ${(props) =>
    props.isProject ? "var(--clr-text)" : "var(--clr-primary-dark)"};

  ${({ cat }) =>
    cat &&
    `
    // border-left: 2px solid #92eced;
  `}
`;

export const TaskCard = ({ task }) => {
  const isProject = task.id !== undefined && task.id !== null;
  const projectColor = projectColors[task.prodId - 1];

  return (
    <CardWrapper
      key={task.id}
      className="card_wrapper"
      cat={task.category}
      isProject={isProject}
      projectColor={projectColor}
    >
      <CardContent
        title={task.title}
        text={task.content}
        id={task.id}
        prodId={task.prodId}
        cat={task.category}
        projectColor={projectColor}
      />

      <CardTop
        tags={task.tags}
        id={task.id}
        prodId={task.prodId}
        completed={task.completed}
      />

      <CardBottom
        due_date={task.due_date}
        created_at={task.created_at}
        id={task.id}
        prodId={task.prodId}
      />
    </CardWrapper>
  );
};
