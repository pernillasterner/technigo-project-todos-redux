import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../reducers/task/taskSlice";
import { removeProject } from "../../../reducers/project/projectSlice";
import { parseISO, format } from "date-fns";

const Bottom = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`;

const CreatedAt = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0;
  color: var(--clr-grey-5);
  font-size: 0.8em;
`;

const RemoveCard = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
`;

export const CardBottom = ({ created_at, id, prodId }) => {
  const dispatch = useDispatch();
  const parsedDate = parseISO(created_at);
  const formattedDate = format(parsedDate, "yyyy-MM-dd");

  const handleRemoveEditCard = () => {
    if (id) {
      dispatch(removeTask(id));
    } else {
      dispatch(removeProject(prodId));
    }
  };

  return (
    <Bottom className="bottom">
      <CreatedAt className="created_at">Created: {formattedDate}</CreatedAt>
      <RemoveCard onClick={handleRemoveEditCard}>🗑️</RemoveCard>
    </Bottom>
  );
};
