import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TaskColumn } from "./TaskColumn";
import styled from "styled-components";
import { NoTasks } from "./ClearTasks/NoTasks";
import { EditTask } from "./EditTask/EditTask";

const StyledTaskContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  height: 100vh;
  position: relative;
`;

export const TaskContainer = () => {
  const allTasks = useSelector((store) => store.task.tasks);
  const taskId = useSelector((store) => store.modal.taskId);
  const isModalOpen = useSelector((store) => store.modal.isModalOpen);
  const option = useSelector((store) => store.filter.option);
  const cat = useSelector((store) => store.filter.cat);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (option === "completed") {
      const completedTasks = allTasks.filter((task) => task.completed);
      setTasks(completedTasks);
    } else if (option === "uncompleted") {
      const uncompletedTasks = allTasks.filter((task) => !task.completed);
      setTasks(uncompletedTasks);
    } else if (cat !== "all") {
      const catTasks = allTasks.filter((task) => task.category === cat);
      if (catTasks.length > 0) {
        setTasks(catTasks);
      } else {
        console.log("Could find task with chosen category");
      }
    } else if (option === "all" || cat === "all") {
      setTasks(allTasks);
    }
  }, [option, allTasks, cat]);

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
