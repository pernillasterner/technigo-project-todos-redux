import { useSelector } from "react-redux";
import { TaskColumn } from "./TaskColumn";
import styled from "styled-components";
import { NoTasks } from "./ClearTasks/NoTasks";
import { EditTask } from "./EditTask/EditTask";

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
  const taskId = useSelector((store) => store.modal.taskId);
  const isModalOpen = useSelector((store) => store.modal.isModalOpen);
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
      {isModalOpen && <EditTask taskId={taskId} />}
    </StyledTaskContainer>
  );
};
