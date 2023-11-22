import styled from "styled-components";

const Content = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CardH5 = styled.h5.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 1.1rem;
`;

const CardDeadline = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 0.9rem;
  background-color: #f37272;
  width: fit-content;
  font-size: 0.8rem;
  padding: 0.3em 0.8em;
  border-radius: var(--border-radius-small);
  margin-top: 0.5em;
`;

export const CardContent = () => {
  return (
    <Content className="content">
      <CardH5 className="card_title">Fixa tvätten 🧦</CardH5>
      <CardDeadline>⏱️ 3 okt</CardDeadline>
    </Content>
  );
};
