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

  @media screen and (max-width: 767px) {
    justify-content: center;
    align-content: start;
    margin-top: 1em;
  }
  @media screen and (max-width: 567px) {
    align-content: baseline;
  }

  @media screen and (max-width: 820px) and (max-height: 1180px) {
    justify-content: space-around;
    & > :last-child {
      flex: min-content;
    }
  }
`;

export const TaskContainer = () => {
  const projects = useSelector((store) => store.project.projects);
  const allTasks = useSelector((store) => store.task.tasks);
  const taskId = useSelector((store) => store.modal.taskId);
  const prodId = useSelector((store) => store.modal.prodId);
  const isModalOpen = useSelector((store) => store.modal.isModalOpen);
  const option = useSelector((store) => store.filter.option);
  const catFilter = useSelector((store) => store.filter.cat);
  const projectFilter = useSelector((store) => store.filter.projects);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (option === "completed") {
      const completedTasks = allTasks.filter((task) => task.completed);
      setTasks(completedTasks);
    } else if (option === "uncompleted") {
      const uncompletedTasks = allTasks.filter((task) => !task.completed);
      setTasks(uncompletedTasks);
    } else if (catFilter !== "all") {
      const catTasks = allTasks.filter((task) => task.category === catFilter);
      if (catTasks.length > 0) {
        setTasks(catTasks);
      } else {
        console.log("Could find task with chosen category");
      }
    } else if (projectFilter !== "all") {
      const projectFilterId = parseInt(projectFilter, 10);
      const projectTasks = allTasks.filter(
        (task) => task.prodId === projectFilterId
      );
      if (projectTasks.length > 0) {
        console.log("more than 0");
        setTasks(projectTasks);
      } else {
        console.log("Could find task with chosen project");
      }
    } else if (
      option === "all" ||
      catFilter === "all" ||
      projectFilter === "all"
    ) {
      setTasks(allTasks);
    }
  }, [option, allTasks, catFilter, projectFilter]);

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
