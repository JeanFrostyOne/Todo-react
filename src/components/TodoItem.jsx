import React from "react";

export default function TodoItem({ item }) {
  return (
    <div className={item.completed ? "todo-item todo-complete" : "todo-item"}>
      <div className="todo-info">
        <p className="todo-text">{item.text}</p>
        <p className="todo-text">{item.time}</p>
      </div>
      <div className="todo-row">
        <button className="todo-btn btn-edit">Edit</button>
        <button className="todo-btn btn-delete">Delete</button>
        {!item.completed && <button className="todo-btn btn-confirm">Confirm</button>}
      </div>
    </div>
  );
}
