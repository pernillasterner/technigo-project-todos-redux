import styled from "styled-components";

const StyledTaskCard = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
 background-color: var(--clr-primary-light);
 min-width: 375px;
 height: 228px;
}
`;

export const TaskCard = () => {
  return (
    <div className="card_wrapper">
      <div className="top">
        {" "}
        <span>hushåll</span>
        <span>tvätt</span>
        <span>🖊️</span>
      </div>
      <div className="content">
        <h5>Fixa tvätten 🧦</h5>
        <p>⏱️ 3 okt</p>
      </div>
      <div className="bottom">
        <p>Created: 2023-10-03</p>
        <span>🗑️</span>
      </div>
    </div>
  );
};
