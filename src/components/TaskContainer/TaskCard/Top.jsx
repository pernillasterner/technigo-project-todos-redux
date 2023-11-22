import styled from "styled-components";

const StyledTop = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
`;

const StyledCat = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: #775ebf;
  padding: 3px 8px;
  margin: 0 5px;
  font-size: 0.7rem;
  border-radius: var(--border-radius);

  &:first-child {
    margin-left: 0;
  }
`;

const StyledEdit = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
`;

export const Top = () => {
  return (
    <StyledTop className="top">
      {" "}
      <div className="cat">
        <StyledCat>hushåll</StyledCat>
        <StyledCat>tvätt</StyledCat>
      </div>
      <StyledEdit>🖊️</StyledEdit>
    </StyledTop>
  );
};
