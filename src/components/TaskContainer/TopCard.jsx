import styled from "styled-components";
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
  min-width: 375px;
  padding: var(--general-mini-padding);

  position: sticky;
  top: 0;
  overflow-y: scroll;
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
  const IconComponent = iconSelection[title.toLowerCase()];

  return (
    <StyledTopCard className="custom-class">
      <div className="avatar">{IconComponent && <IconComponent />}</div>
      <H2>{title} tasks</H2>
      <TotalNum className="totalnum" title={title}>
        {total}
      </TotalNum>
      <img src="./icons/arrow.svg" alt="arrow" width={10} height={10} />
    </StyledTopCard>
  );
};
