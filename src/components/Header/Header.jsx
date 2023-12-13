import { UserInfoBar } from "./UserInfoBar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: var(--general-padding);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 767px) {
    padding: var(--general-mini-padding) 0;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <UserInfoBar />
    </HeaderContainer>
  );
};
