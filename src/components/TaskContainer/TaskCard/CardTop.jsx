import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { openEditModal } from "../../../reducers/modal/modalSlice";
import { TagBtn, CatBtn } from "../../../styles/Buttons";
import { useEffect, useState } from "react";

const Top = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  position: relative;
  ${({ cat }) =>
    cat &&
    `
  flex-direction: column;
  align-items: flex-start;
  text-transform: capitalize;
`}
`;

const CardEdit = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
  position: absolute;
  right: 0;
`;

const Tag = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-right: 5px;
  > *:not(:first-child) {
    margin-left: 0px;
  }
`;

export const CardTop = ({ tags, id, cat, prodId }) => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.project.projects);
  const [currentProject, setCurrentProject] = useState("");
  // console.log(prodId);

  useEffect(() => {
    if (prodId !== undefined) {
      const findProject = projects.find((project) => project.prodId == prodId);
      // console.log(findProject);
      if (findProject) {
        setCurrentProject(findProject.title);
      }
    } else {
      // Handle the case when prodId is undefined or not found in projects
      setCurrentProject("");
    }
  }, [prodId, projects]);

  // const projectWithProdId = projects.find(
  //   (project) => project.prodId === prodIdToFind
  // );
  // console.log(currentProject);
  const handleEditClick = () => {
    if (id !== undefined && id !== null) {
      dispatch(openEditModal({ id, type: "task" }));
    } else if (prodId !== undefined && prodId !== null) {
      dispatch(openEditModal({ id: prodId, type: "project" }));
    }
  };
  // TODO: Click on tag and remove it

  return (
    <Top className="top" cat={cat}>
      {id >= 0 && currentProject !== "" && currentProject}
      {cat && <CatBtn className="cat">{cat}</CatBtn>}
      <Tag className="tag">
        {tags && tags.map((tag, index) => <TagBtn key={index}>{tag}</TagBtn>)}
      </Tag>

      <CardEdit onClick={handleEditClick}>🖊️</CardEdit>
    </Top>
  );
};
