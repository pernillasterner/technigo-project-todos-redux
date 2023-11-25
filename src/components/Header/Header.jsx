import { UserInfoBar } from "./UserInfoBar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: var(--general-padding);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <UserInfoBar />
    </HeaderContainer>
  );
};
