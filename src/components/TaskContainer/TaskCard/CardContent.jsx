import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { openEditModal } from "../../../reducers/modal/modalSlice";
import styled from "styled-components";
import { IconContent } from "../../../assets/Icons";
import { TagBtn, CatBtn } from "../../../styles/Buttons";

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
  margin-bottom: 0;
  width: 90%;
  font-weight: 600;
  margin-top: 0.9em;
`;

const CardText = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 0.8rem;
  color: var(--clr-text);
  display: ${(props) => (props.isVisible ? "block" : "none")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: ${(props) => (props.isVisible ? "100px" : "0")};
  margin-bottom: 1em;
`;

const CardEdit = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
  position: absolute;
  right: 15px;
`;

const ProjectItem = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  height: 25px;
  background: #65797f;
  position: absolute;
  top: 0;
  right: 47px;
  border-radius: 0px 0 10px 10px;
  width: fit-content;
  padding: 0 15px;
  font-size: 0.9rem;
`;

const ShowContentIcon = styled.span`
  cursor: pointer;
  margin-bottom: 0.5em;
`;

export const CardContent = ({ title, id, text, prodId, cat }) => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.project.projects);
  const [currentProject, setCurrentProject] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isCatBtnVisible, setIsCatBtnVisible] = useState(false);

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

  const handleShowContent = () => {
    setIsContentVisible(!isContentVisible);
    setIsCatBtnVisible(!isCatBtnVisible);
  };

  console.log(projects);

  return (
    <Content className="content" cat={cat}>
      {/* Display project */}
      {id >= 0 && currentProject !== "" && (
        <ProjectItem classname="project_item">
          <p>☍ {currentProject}</p>
        </ProjectItem>
      )}
      <CardTitle className="card_title">{title}</CardTitle>
      {text && (
        <ShowContentIcon onClick={handleShowContent}>
          <IconContent />
        </ShowContentIcon>
      )}

      <CardText isVisible={isContentVisible}>{text}</CardText>
      {isCatBtnVisible && cat && <CatBtn className="cat">{cat}</CatBtn>}
      <CardEdit onClick={handleEditClick}>🖊️</CardEdit>
    </Content>
  );
};
