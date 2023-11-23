import { useSelector } from "react-redux";
import { TaskColumn } from "./TaskColumn";
import styled from "styled-components";

const StyledTaskContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  padding: var(--general-padding);
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
`;

export const TaskContainer = () => {
  const tasks = useSelector((store) => store.task.tasks);
  const taskColumns = [
    { title: "uncompleted", tasks: tasks.filter((task) => !task.completed) },
    { title: "completed", tasks: tasks.filter((task) => task.completed) },
  ];

  return (
    <>
      {tasks && (
        <StyledTaskContainer className="task_container">
          {taskColumns.map((col) => (
            <TaskColumn
              key={col.title}
              title={col.title}
              tasks={col.tasks}
              total={col.tasks.length}
            />
          ))}
        </StyledTaskContainer>
      )}
    </>
  );
};
