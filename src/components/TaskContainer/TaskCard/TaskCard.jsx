import styled from "styled-components";
import { CardTop } from "./CardTop";
import { CardContent } from "./CardContent";
import { CardBottom } from "./CardBottom";

const CardWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  max-width: 375px;
  min-height: 228px;
  border-radius: var(--border-radius-large);
  margin: 15px 0;
  padding: var(--general-smaller-padding);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ cat }) =>
    cat &&
    `
    // border-left: 2px solid #92eced;
  `}
`;

export const TaskCard = ({ task }) => {
  return (
    <CardWrapper key={task.id} className="card_wrapper" cat={task.category}>
      <CardContent
        title={task.title}
        due_date={task.due_date}
        text={task.content}
        id={task.id}
        prodId={task.prodId}
      />
      <CardTop
        tags={task.tags}
        id={task.id}
        cat={task.category}
        prodId={task.prodId}
        completed={task.completed}
      />

      <CardBottom
        created_at={task.created_at}
        id={task.id}
        prodId={task.prodId}
      />
    </CardWrapper>
  );
};
