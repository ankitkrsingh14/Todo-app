import { useState } from "react";
let id = 123;
const InputField = (props) => {
  const handleChange = (event) => {
    //console.log(event.target.value);
    props.setText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (props.text === "") {
      return;
    }
    props.setTodos([
      ...props.todos,
      {
        id: id++,
        text: props.text,
        completed: false,
      },
    ]);
    props.setText("");
    // console.log(props.todos);
  };
  console.log();
  return (
    <form className="input-container" onSubmit={handleClick}>
      <input
        type="text"
        name=""
        id="todo-txt"
        placeholder="Add task to perform"
        value={props.text}
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default InputField;
