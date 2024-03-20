import React from "react";

export default function TodoItem({ item, handleDelete, handleComplete, handleEdit }) {
  return (
    <div className={item.completed ? "todo-item todo-complete" : "todo-item"}>
      <div className="todo-info">
        <p className="todo-text">{item.text}</p>
        <p className="todo-text">{item.time}</p>
      </div>
      <div className="todo-row">
        <button onClick={() => handleEdit(item)} className="todo-btn btn-edit">Edit</button>
        <button
          onClick={() => handleDelete(item.id)}
          className="todo-btn btn-delete"
        >
          Delete
        </button>
        {!item.completed && (
          <button
            onClick={() => handleComplete(item.id)}
            className="todo-btn btn-confirm"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}
