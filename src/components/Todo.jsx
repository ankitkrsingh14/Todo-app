import React, { useState } from "react";

const Todo = (props) => {
  // console.log(props);
  const [completed, setCompleted] = useState(false);
  const handleChange = () => {
    setCompleted();
  };
  const handleDelete = () => {
    const updatedTodos = props.todos.filter(
      (item) => item.id !== props.todo.id
    );
    props.setTodos(updatedTodos);
    console.log(updatedTodos);
  };
  const handleEdit = () => {
    props.setText(props.todo.text);
    handleDelete();
  };
  return (
    <div className="todo-container">
      <div className="left-container">
        <input
          type="checkbox"
          name=""
          id="todo"
          checked={completed}
          onChange={handleChange}
        />
        <p>{props.todo.text}</p>
      </div>
      <div className="right-container">
        <button className="btn btn-secondary" onClick={handleDelete}>
          Del
        </button>
        <button className="btn btn-secondary" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Todo;
