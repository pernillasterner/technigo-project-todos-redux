import { UserInfoBar } from "./UserInfoBar";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: var(--general-padding);
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <UserInfoBar />
    </HeaderContainer>
  );
};
