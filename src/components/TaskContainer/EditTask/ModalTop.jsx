import styled from "styled-components";
import { CatBtn } from "../../../styles/Buttons";

const CatInputContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  width: 90%;
`;

const CatsContainer = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0.7rem;
`;

export const ModalTop = ({ onCategoryChange, cats }) => {
  const handleCatChange = (e) => {
    e.preventDefault();
    const newCat = e.target.value;
    onCategoryChange(newCat);

    // TODO: Need to clear the input field
  };

  return (
    <>
      <CatInputContainer className="cat_input-close">
        <label htmlFor="category" className="is-hidden">
          Category
        </label>
        <input
          type="text"
          name="category"
          placeholder="Add category"
          onChange={handleCatChange}
        />
      </CatInputContainer>
      <CatsContainer className="cats">
        {cats && cats.map((cat, index) => <CatBtn key={index}>{cat}</CatBtn>)}
      </CatsContainer>
      {/* ... rest of the component */}
    </>
  );
};
