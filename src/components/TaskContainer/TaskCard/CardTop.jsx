import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openEditModal } from "../../../reducers/modal/modalSlice";

const Top = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
`;

const CardCat = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: #775ebf;
  padding: 0.1em 0.8em;
  margin: 0 5px;
  font-size: 0.8rem;
  border-radius: var(--border-radius-small);

  &:first-child {
    margin-left: 0;
  }
`;

const CardEdit = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
`;

export const CardTop = ({ cats, id }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(openEditModal(id));
  };

  return (
    <Top className="top">
      {" "}
      <div className="cat">
        {cats && cats.map((cat, index) => <CardCat key={index}>{cat}</CardCat>)}
      </div>
      <CardEdit onClick={handleEditClick}>🖊️</CardEdit>
    </Top>
  );
};
