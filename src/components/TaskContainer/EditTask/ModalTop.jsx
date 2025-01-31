import styled from "styled-components";
import { useSelector } from "react-redux";
import { TagBtn } from "../../../styles/Buttons";
import { Select } from "../../../styles/Select";
import { useState, useEffect } from "react";

const ProjectCategoryContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  flex-direction: row;
  justify-content: start-flex;
  width: 100%;
  input {
    margin-right: 0.4rem;
  }
  select {
    width: 100%;
  }
`;

const ProjectContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0.7rem;
  width: 50%;
  margin-right: 0.4em;
`;

const CategoryContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0.7rem;
  width: 50%;
`;

export const ModalTop = ({ onInputChange, currentCat, prodId, id }) => {
  const categories = useSelector((store) => store.filter.categories);
  const projects = useSelector((store) => store.project.projects);
  const [currentProject, setCurrentProject] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (prodId !== undefined) {
      const foundProject = projects.find(
        (project) => project.prodId === prodId
      );

      if (foundProject) {
        setCurrentProject(foundProject.title);
      } else {
        // Handle the case when prodId is not found in projects
        setCurrentProject("Choose a project");
      }
    } else {
      // Handle the case when prodId is undefined
      setCurrentProject("Choose a project");
    }
  }, [prodId, projects]);

  const handleInput = (e) => {
    e.preventDefault();
    const value = e.target;
    setInputValue(value);
    onInputChange(value);
  };

  return (
    <>
      <ProjectCategoryContainer className="project_category_container">
        {id !== undefined && (
          <ProjectContainer className="project_dropdown">
            <label htmlFor="project">Projects</label>
            <Select id="project" name="prodId" onChange={handleInput}>
              {currentProject ? (
                <option value={currentProject}>{currentProject}</option>
              ) : (
                <option value="">Choose a test</option>
              )}
              <option value="">Choose a project</option>
              {projects
                .filter((project) => project.title !== currentProject)
                .map((project) => (
                  <option key={project.title} value={project.prodId}>
                    {project.title}
                  </option>
                ))}
            </Select>
          </ProjectContainer>
        )}

        <CategoryContainer className="category_dropdown">
          <label htmlFor="category">Categories</label>
          <Select name="category" onChange={handleInput}>
            {currentCat ? (
              <option value={currentCat}>{currentCat}</option>
            ) : (
              <option value="">Choose a category</option>
            )}
            <option value="">Choose a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
        </CategoryContainer>

        {/* <label htmlFor="tag" className="is-hidden">
          Tag
          <input
            type="text"
            name="tag"
            placeholder="Add tag"
            onChange={handleInput}
          />
        </label> */}
      </ProjectCategoryContainer>
    </>
  );
};
