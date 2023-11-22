import styled from "styled-components";
import { Top } from "./Top";
import { Content } from "./Content";
import { Bottom } from "./Bottom";

const StyledTaskCard = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  min-width: 375px;
  height: 228px;
  border-radius: var(--border-radius-large);
  margin: 15px 0;
  padding: var(--general-smaller-padding);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TaskCard = () => {
  return (
    <StyledTaskCard className="card_wrapper">
      <Top />
      <Content />
      <Bottom />
    </StyledTaskCard>
  );
};
