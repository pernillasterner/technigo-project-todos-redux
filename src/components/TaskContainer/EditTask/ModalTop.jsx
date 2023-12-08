import styled from "styled-components";
import { useSelector } from "react-redux";
import { TagBtn } from "../../../styles/Buttons";
import { Select } from "../../../styles/Select";
import { useState, useEffect } from "react";

const TagInputContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  input {
    margin-right: 0.4rem;
  }
  select {
    min-width: 30%;
  }
`;

const TagsContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0.7rem;
`;

export const ModalTop = ({ onInputChange, tags, currentCat, prodId }) => {
  const categories = useSelector((store) => store.filter.categories);
  const projects = useSelector((store) => store.project.projects);
  const [currentProject, setCurrentProject] = useState("");

  useEffect(() => {
    if (prodId !== undefined && projects[prodId]) {
      setCurrentProject(projects[prodId].title);
    } else {
      // Handle the case when prodId is undefined or not found in projects
      setCurrentProject("choose a project");
    }
  }, [prodId, projects]);

  const handleInput = (e) => {
    e.preventDefault();
    const inputValue = e.target;
    onInputChange(inputValue);

    // TODO: Need to clear the input field
  };

  return (
    <>
      <TagInputContainer className="tag_input-close">
        <Select name="category" onChange={handleInput}>
          {currentCat ? (
            <option value={currentCat}>{currentCat}</option>
          ) : (
            <option value="all">All categories</option>
          )}
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
        <label htmlFor="tag" className="is-hidden">
          Tag
        </label>
        <input
          type="text"
          name="tag"
          placeholder="Add tag"
          onChange={handleInput}
        />
      </TagInputContainer>

      <TagsContainer className="tags">
        <Select name="prodId" onChange={handleInput}>
          {currentProject ? (
            <option value={currentProject}>{currentProject}</option>
          ) : (
            <option value="all">All projects</option>
          )}
          {projects.map((project) => (
            <option key={project.title} value={project.prodId}>
              {project.title}
            </option>
          ))}
        </Select>
        {tags && tags.map((tag, index) => <TagBtn key={index}>{tag}</TagBtn>)}
      </TagsContainer>
    </>
  );
};
