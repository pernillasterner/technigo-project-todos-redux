import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { openEditModal } from "../../../reducers/modal/modalSlice";
import styled from "styled-components";

const Content = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const CardTitle = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 1.1rem;
  padding: 0.2rem 0;
  width: 90%;
  font-weight: 600;
`;

const CardText = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 0.8rem;
  color: var(--clr-text);
`;

const CardEdit = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
  position: absolute;
  right: 15px;
`;

export const CardContent = ({ title, due_date, id, text, prodId }) => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.project.projects);
  const [currentProject, setCurrentProject] = useState("");

  const handleEditClick = () => {
    if (id !== undefined && id !== null) {
      dispatch(openEditModal({ id, type: "task" }));
    } else if (prodId !== undefined && prodId !== null) {
      dispatch(openEditModal({ id: prodId, type: "project" }));
    }
  };

  useEffect(() => {
    if (prodId !== undefined) {
      const findProject = projects.find((project) => project.prodId == prodId);

      if (findProject) {
        setCurrentProject(findProject.title);
      }
    } else {
      // Handle the case when prodId is undefined or not found in projects
      setCurrentProject("");
    }
  }, [prodId, projects]);

  return (
    <Content className="content">
      {/* Display project */}
      {id >= 0 && currentProject !== "" && currentProject}
      <CardTitle className="card_title">{title}</CardTitle>
      <CardText>{text}</CardText>

      <CardEdit onClick={handleEditClick}>🖊️</CardEdit>
    </Content>
  );
};
