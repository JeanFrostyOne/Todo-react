import React, { useState } from "react";

export default function Modal({ handleClose, item, handleSave }) {
  const [text, setText] = useState(item.text);
  const [time, setTime] = useState(item.time);
  return (
    <div className="modal">
      <div className="modal-container">
        <h2 className="modal-title">Edit todo</h2>
        <div className="modal-form">
          <input
            type="text"
            onChange={(event) => setText(event.target.value)}
            value={text}
            className="todo-inp"
            placeholder="Go shopping..."
          />
          <input
            type="time"
            onChange={(event) => setTime(event.target.value)}
            value={time}
            className="todo-inp"
          />
        </div>
        <div className="modal-btns">
          <button onClick={handleClose} className="todo-btn btn-delete">
            Cancel
          </button>
          <button
            onClick={() => handleSave(text, time, item.id)}
            className="todo-btn btn-confirm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
