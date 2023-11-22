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

const TotalNum = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  font-weight: 600;
  color: var(--clr-uncompleted);
`;

const H4 = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0;
  text-decoration: uppercase;
  font-weight: 700;
  text-transform: uppercase;
`;

export const TopCard = ({ title }) => {
  return (
    <StyledTopCard className="custom-class">
      <div className="avatar">
        {" "}
        {title && (
          <img
            src={`./avatars/${title.toLowerCase()}.svg`}
            alt={`${title} avatar`}
          />
        )}
      </div>
      <H4>{title} tasks</H4>
      <TotalNum className="totalnum">16</TotalNum>
      <img src="./icons/arrow.svg" alt="arrow" style={{ width: "10px" }} />
    </StyledTopCard>
  );
};
