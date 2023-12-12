import { Avatar } from "./Avatar";
import { Category } from "./Category";
import { Filter } from "./Filter";
import styled from "styled-components";

const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Greeting = styled.h2`
  font-size: 1.5rem;
`;

export const UserInfoBar = () => {
  return (
    <>
      <Greeting>Hello Pillan 👋</Greeting>

      <RightSection className="right-section">
        <Category />
        <Filter />
        <Avatar />
      </RightSection>
    </>
  );
};
