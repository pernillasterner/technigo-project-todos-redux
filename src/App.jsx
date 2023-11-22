import styled from "styled-components";
import { TopLeftIcon } from "./components/Header/TopLeftIcon";
import { Header } from "./components/Header/Header";

const MAIN = styled.main`
  padding: var(--general-padding);
`;

export const App = () => {
  return (
    <MAIN>
      <TopLeftIcon />
      <Header />
    </MAIN>
  );
};
