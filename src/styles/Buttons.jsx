import styled from "styled-components";

export const SubmitBtn = styled.button.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-submit);
  color: var(--clr-white);
  border-radius: var(--border-radius-small);
  border: none;
  padding: var(--general-mini-padding);
  margin-top: 1em;
  font-weight: 700;
`;
