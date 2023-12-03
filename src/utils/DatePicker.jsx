import React, { useRef } from "react";

export const DatePicker = ({ onInputChange, due_date }) => {
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();

    console.log(due_date);

    const inputValue = e.target;
    console.log(inputValue);
    onInputChange(inputValue);
  };

  return (
    <>
      <label htmlFor="due_date">Due date</label>
      <input
        type="date"
        name="due_date"
        value={due_date}
        onChange={handleChange}
        ref={dateInputRef}
      />
    </>
  );
};
