import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, text: "Meeting at 10am", completed: false },
    // bydefault value
  ]);
  const [text, setText] = useState("");

  console.log(todos);
  const handleDeleteAll = () => {
    setTodos([]);
    // console.log("btnclicked");
  };
  return (
    <div className="app">
      <div className="container">
        <h1>ToDo Daily Task</h1>
        <InputField
          todos={todos}
          setTodos={setTodos}
          text={text}
          setText={setText}
        />
        <div className="all-todo-container">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
              setText={setText}
            />
          ))}
        </div>

        <div className="btn-container">
          <button className="btn clear-all-btn" onClick={handleDeleteAll}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
