import styled from "styled-components";

export const Select = styled.select.attrs((props) => ({
  className: props.className || "",
}))`
  background: var(--clr-primary-dark);
  color: var(--clr-white);
  border-radius: var(--border-radius-mini);
  border: 1px solid var(--clr-grey-5);
  width: fit-content;
  padding: var(--general-mini-padding);
  margin-right: 2em;
`;
