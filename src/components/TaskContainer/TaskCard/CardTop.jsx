import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openEditModal } from "../../../reducers/modal/modalSlice";
import { TagBtn, CatBtn } from "../../../styles/Buttons";

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

const CardEdit = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
  position: absolute;
  right: 0;
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

export const CardTop = ({ tags, id, cat }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(openEditModal(id));
  };

  // TODO: Click on tag and remove it

  return (
    <Top className="top" cat={cat}>
      {cat && <CatBtn className="cat">{cat}</CatBtn>}
      <Tag className="tag">
        {tags && tags.map((tag, index) => <TagBtn key={index}>{tag}</TagBtn>)}
      </Tag>

      <CardEdit onClick={handleEditClick}>🖊️</CardEdit>
    </Top>
  );
};
