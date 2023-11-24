import styled from "styled-components";

const TitleInput = styled.input.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 1.4rem;
`;

export const ModalContent = ({ onInputChange, title, content }) => {
  const handleInput = (e) => {
    e.preventDefault();
    const inputValue = e.target;
    onInputChange(inputValue);
  };

  return (
    <>
      <label htmlFor="title" className="is-hidden">
        Title
      </label>
      <TitleInput
        type="text"
        name="title"
        placeholder={title}
        onChange={handleInput}
      />

      <label htmlFor="content">Description</label>
      <textarea
        type="text"
        name="content"
        id=""
        cols="60"
        rows="7"
        placeholder={content}
        onChange={handleInput}
      ></textarea>
    </>
  );
};
