import styled from "styled-components";
import { TopLeftIcon } from "./components/Header/TopLeftIcon";
import { Header } from "./components/Header/Header";
import { TaskContainer } from "./components/TaskContainer/TaskContainer";

const MAIN = styled.main`
  padding: var(--general-padding);
  height: 100vh;
  display: flex;
  flex-direction: column;
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
