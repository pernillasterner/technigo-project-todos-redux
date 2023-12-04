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
  const projects = useSelector((store) => store.project.projects);
  const allTasks = useSelector((store) => store.task.tasks);
  const taskId = useSelector((store) => store.modal.taskId);
  const prodId = useSelector((store) => store.modal.prodId);
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

  const projectColumns = [
    {
      title: "projects",
      tasks: projects.filter((project) => !project.completed),
    },
  ];

  const allColumns = [...taskColumns, ...projectColumns];

  return (
    <StyledTaskContainer className="task_container">
      {tasks.length !== 0 ? (
        allColumns.map((col, index) => (
          <TaskColumn
            key={`column_${index}`}
            title={col.title}
            tasks={col.tasks}
            total={col.tasks.length}
          />
        ))
      ) : (
        <NoTasks />
      )}
      {isModalOpen && taskId !== null && (
        <EditTask taskId={taskId} isTask={true} />
      )}
      {isModalOpen && prodId !== null && (
        <EditTask prodId={prodId} isTask={false} />
      )}
    </StyledTaskContainer>
  );
};
