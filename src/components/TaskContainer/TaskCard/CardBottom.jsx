import styled from "styled-components";

const Bottom = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
`;

export const CardBottom = () => {
  return (
    <div className="bottom">
      <p>Created: 2023-10-03</p>
      <span>🗑️</span>
    </div>
  );
};
