import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openEditModal } from "../../../reducers/modal/modalSlice";
import { CatBtn } from "../../../styles/Buttons";

const Top = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
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
        {cats && cats.map((cat, index) => <CatBtn key={index}>{cat}</CatBtn>)}
      </div>
      <CardEdit onClick={handleEditClick}>🖊️</CardEdit>
    </Top>
  );
};
