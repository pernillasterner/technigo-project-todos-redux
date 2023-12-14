import styled from "styled-components";
import { TopLeftIcon } from "./components/Header/TopLeftIcon";
import { Header } from "./components/Header/Header";
import { TaskContainer } from "./components/TaskContainer/TaskContainer";

const MAIN = styled.main`
  padding: var(--general-padding) 45px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 1728px;
  @media screen and (max-width: 820px) and (max-height: 1180px) {
    padding: var(--general-smaller-padding) 25px;
  }
  @media screen and (max-width: 767px) {
    padding: var(--general-smaller-padding) 10px;
  }
`;

export const App = () => {
  return (
    <MAIN>
      <TopLeftIcon />
      <Header />
      <TaskContainer />
    </MAIN>
  );
};
