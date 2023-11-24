import React, { useRef } from "react";

export const DatePicker = ({ onInputChange, due_date }) => {
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();

    const inputValue = e.target;
    onInputChange(inputValue);
  };

  return (
    <>
      <label htmlFor="due_date">Due date</label>
      <input
        type="date"
        name="due_date"
        onChange={handleChange}
        ref={dateInputRef}
      />
    </>
  );
};
