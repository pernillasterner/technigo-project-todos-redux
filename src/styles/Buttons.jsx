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

export const TagBtn = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-cats);
  padding: 0.1em 0.8em;
  margin: 5px;

  font-size: 0.8rem;
  border-radius: var(--border-radius-small);

  &:first-child {
    margin-left: 0;
  }
  > *:not(:first-child) {
    margin-left: 0px;
  }
`;

export const CatBtn = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  color: #92eced;
  margin-bottom: 0.8em;
`;
