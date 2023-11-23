import styled from "styled-components";

export const ModalTop = ({ onCategoryChange, categories }) => {
  const handleCatChange = (e) => {
    e.preventDefault();
    const newCat = e.target.value;
    onCategoryChange(newCat);
  };

  return (
    <>
      <div className="cat_input-close">
        <label htmlFor="category" className="is-hidden">
          Category
        </label>
        <input
          type="text"
          name="category"
          placeholder="Add category"
          onChange={handleCatChange}
        />
      </div>
      <div className="cats">
        {categories.map((cat, index) => (
          <span key={index}>{cat}</span>
        ))}
      </div>
      {/* ... rest of the component */}
    </>
  );
};
