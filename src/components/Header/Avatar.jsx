import styled from "styled-components";
import { IconAvatar } from "../../assets/Icons";

const StyledAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #92eced;
  margin-bottom: 1.25rem;
  @media screen and (max-width: 767px) {
    position: absolute;
    right: 0;
    top: -19px;
  }
`;

export const Avatar = () => {
  return (
    <StyledAvatar>
      <IconAvatar />
    </StyledAvatar>
  );
};
