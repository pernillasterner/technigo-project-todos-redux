import { Avatar } from "./Avatar";
import { Category } from "./Category";
import { Filter } from "./Filter";
import styled from "styled-components";

const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
`;

export const UserInfoBar = () => {
  return (
    <>
      <div className="greeting">
        <H2>Hello Pillan 👋</H2>
      </div>

      <RightSection className="right-section">
        <Category />
        <Filter />
        <Avatar />
      </RightSection>
    </>
  );
};
