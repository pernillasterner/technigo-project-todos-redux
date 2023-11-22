import styled from "styled-components";

const StyledTopCard = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  border-radius: var(--border-radius-medium);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 375px;
  padding: var(--general-mini-padding);
`;

const TotalNum = styled.span.attrs((props) => {
  return {
    className: props.className || "",
  };
})`
  font-weight: 600;
  color: var(--clr-${(props) => props.title});
`;

const H2 = styled.h2.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0;
  text-decoration: uppercase;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const TopCard = ({ title, total }) => {
  return (
    <StyledTopCard className="custom-class">
      <div className="avatar">
        {" "}
        {title && (
          <img
            src={`./avatars/${title.toLowerCase()}.svg`}
            alt={`${title || "Avatar"} tasks`}
          />
        )}
      </div>
      <H2>{title} tasks</H2>
      <TotalNum className="totalnum" title={title}>
        {total}
      </TotalNum>
      <img src="./icons/arrow.svg" alt="arrow" style={{ width: "10px" }} />
    </StyledTopCard>
  );
};
