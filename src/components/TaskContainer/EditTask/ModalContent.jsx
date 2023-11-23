export const ModalContent = ({ title }) => {
  console.log(title);
  return (
    <>
      <label htmlFor="title" className="is-hidden">
        Title
      </label>
      <input type="text" name="title" placeholder={title} />

      <label htmlFor="textarea" className="is-hidden">
        Textarea
      </label>
      <textarea
        name=""
        id=""
        cols="60"
        rows="7"
        placeholder="Add content"
      ></textarea>
    </>
  );
};
