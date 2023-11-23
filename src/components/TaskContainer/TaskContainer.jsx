import { useSelector } from "react-redux";
import { TaskColumn } from "./TaskColumn";
import styled from "styled-components";
import { NoTasks } from "./ClearTasks/NoTasks";
import { EditTask } from "./EditTask/EditTask";
import { openEditModal } from "../../reducers/modal/modalSlice";

const StyledTaskContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;
  position: relative;
`;

export const TaskContainer = () => {
  const tasks = useSelector((store) => store.task.tasks);

  const taskColumns = [
    { title: "uncompleted", tasks: tasks.filter((task) => !task.completed) },
    { title: "completed", tasks: tasks.filter((task) => task.completed) },
  ];

  return (
    <StyledTaskContainer className="task_container">
      {tasks.length !== 0 ? (
        taskColumns.map((col) => (
          <TaskColumn
            key={col.title}
            title={col.title}
            tasks={col.tasks}
            total={col.tasks.length}
          />
        ))
      ) : (
        <NoTasks />
      )}
      {!openEditModal && <EditTask />}
    </StyledTaskContainer>
  );
};
