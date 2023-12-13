import styled from "styled-components";
import { useState } from "react";
import {
  IconCompleted,
  IconUncompleted,
  IconProjects,
} from "../../assets/Icons";

// Select icon depending on title
const iconSelection = {
  completed: IconCompleted,
  uncompleted: IconUncompleted,
  projects: IconProjects,
};

const StyledTopCard = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  border-radius: var(--border-radius-medium);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--general-mini-padding);
  position: sticky;
  top: 0;
  overflow-y: scroll;
  @media screen and (max-width: 767px) {
    cursor: pointer;
  }
`;

const TotalNum = styled.span.attrs((props) => {
  return {
    className: props.className || "",
  };
})`
  font-weight: 600;
  color: var(--clr-${(props) => props.title});
  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const H2 = styled.h2.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0;
  text-decoration: uppercase;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1rem;
  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const StyleIconComponent = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 48px;
    height: 48px;
  }
  svg {
    width: 100%;
  }
`;

export const TopCard = ({ title, total }) => {
  const IconComponent = iconSelection[title.toLowerCase()];
  const [openColumn, setOpenColumn] = useState(false);

  const handleColumns = () => {
    const columnId = document.getElementById(title);
    if (!openColumn) {
      columnId.style.display = "block";
      setOpenColumn(!openColumn);
    } else {
      columnId.style.display = "none";
      setOpenColumn(!openColumn);
    }
  };

  return (
    <StyledTopCard className="custom-class" onClick={handleColumns}>
      {IconComponent && (
        <StyleIconComponent>
          <IconComponent />
        </StyleIconComponent>
      )}
      <H2>{title} tasks</H2>
      <TotalNum className="totalnum" title={title}>
        {total}
      </TotalNum>
      <img src="./icons/arrow.svg" alt="arrow" width={10} height={10} />
    </StyledTopCard>
  );
};
