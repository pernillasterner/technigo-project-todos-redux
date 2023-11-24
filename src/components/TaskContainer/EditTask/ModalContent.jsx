import styled from "styled-components";

const TitleInput = styled.input.attrs((props) => ({
  className: props.className || "",
}))`
  font-size: 1.4rem;
`;

export const ModalContent = ({
  onTitleChange,
  onContentChange,
  title,
  content,
}) => {
  const handleTitleInput = (e) => {
    e.preventDefault();
    const newTitle = e.target.value;
    onTitleChange(newTitle);
  };

  const handleContentInput = (e) => {
    e.preventDefault();
    const newContent = e.target.value;
    onContentChange(newContent);
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
        onChange={handleTitleInput}
      />

      <label htmlFor="content">Description</label>
      <textarea
        type="text"
        name="content"
        id=""
        cols="60"
        rows="7"
        placeholder={content}
        onChange={handleContentInput}
      ></textarea>
    </>
  );
};
