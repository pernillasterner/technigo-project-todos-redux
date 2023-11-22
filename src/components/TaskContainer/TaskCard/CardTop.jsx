import styled from "styled-components";

const Top = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
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

export const CardTop = () => {
  return (
    <Top className="top">
      {" "}
      <div className="cat">
        <CardCat>hushåll</CardCat>
        <CardCat>tvätt</CardCat>
      </div>
      <CardEdit>🖊️</CardEdit>
    </Top>
  );
};
