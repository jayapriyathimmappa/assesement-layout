import React from "react";

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => toggleTodo(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
