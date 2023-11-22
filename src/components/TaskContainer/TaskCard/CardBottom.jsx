import styled from "styled-components";

const Bottom = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
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

export const CardBottom = () => {
  return (
    <Bottom className="bottom">
      <CreatedAt className="created_at">Created: 2023-10-03</CreatedAt>
      <RemoveCard>🗑️</RemoveCard>
    </Bottom>
  );
};
