import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../reducers/task/taskSlice";
import { removeProject } from "../../../reducers/project/projectSlice";
import { parseISO, format } from "date-fns";
import { useState, useEffect } from "react";

const Bottom = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
  align-items: end;
`;

const CreatedAt = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0;
  font-size: 0.8em;
  @media screen and (max-width: 767px) {
    font-size: 0.7em;
  }
`;

const RemoveCard = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
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
  color: var(--clr-primary-dark);
`;

export const CardBottom = ({ created_at, id, prodId, due_date }) => {
  const dispatch = useDispatch();
  const currentData = new Date();
  const parsedDate = parseISO(created_at);
  const formattedDueData = currentData.toISOString().split("T")[0];
  const formattedDate = format(parsedDate, "yyyy-MM-dd");
  const [dueDate, setDueDate] = useState("var(--clr-grey-6)");

  const handleRemoveEditCard = () => {
    if (id) {
      dispatch(removeTask(id));
    } else {
      dispatch(removeProject(prodId));
    }
  };

  useEffect(() => {
    if (formattedDueData > due_date) {
      setDueDate("var(--clr-alert)");
    } else {
      setDueDate("var(--clr-grey-6)");
    }
  }, [formattedDueData, due_date]);

  return (
    <Bottom className="bottom">
      <CreatedAt className="created_at">Created: {formattedDate}</CreatedAt>
      {due_date && <CardDeadline dueDate={dueDate}>⏱️ {due_date}</CardDeadline>}
      <RemoveCard onClick={handleRemoveEditCard}>🗑️</RemoveCard>
    </Bottom>
  );
};
