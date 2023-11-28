import styled from "styled-components";
import { useSelector } from "react-redux";
import { TagBtn } from "../../../styles/Buttons";
import { Select } from "../../../styles/Select";

const TagInputContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  input {
    margin-right: 0.4rem;
  }
  select {
    margin-right: 0;
    min-width: 30%;
  }
`;

const TagsContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0.7rem;
`;

export const ModalTop = ({ onInputChange, tags, currentCat }) => {
  const categories = useSelector((store) => store.filter.categories);
  const handleInput = (e) => {
    e.preventDefault();
    const inputValue = e.target;
    onInputChange(inputValue);

    // TODO: Need to clear the input field
  };

  return (
    <>
      <TagInputContainer className="tag_input-close">
        <label htmlFor="tag" className="is-hidden">
          Tag
        </label>
        <input
          type="text"
          name="tag"
          placeholder="Add tag"
          onChange={handleInput}
        />
        <Select name="category" onChange={handleInput}>
          {currentCat ? (
            <option value={currentCat}>{currentCat}</option>
          ) : (
            <option value="all">All</option>
          )}
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </TagInputContainer>

      <TagsContainer className="tags">
        {tags && tags.map((tag, index) => <TagBtn key={index}>{tag}</TagBtn>)}
      </TagsContainer>
      {/* ... rest of the component */}
    </>
  );
};
