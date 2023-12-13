import styled from "styled-components";
import { IconAvatar } from "../../assets/Icons";

const StyledAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #92eced;
`;

export const Avatar = () => {
  return <IconAvatar />;
};
