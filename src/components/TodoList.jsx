import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [text, setText] = useState("");
  const [time, setTime] = useState("00:00");
  const [data, setData] = useState([
    { id: 1, text: "I am a student", time: "13:36", completed: false },
    { id: 2, text: "I am a cooker", time: "14:36", completed: true },
    { id: 3, text: "I am a lawyer", time: "19:36", completed: false },
  ]);
  function handleAdd() {
    if (text != "") {
      setData((prev) => [
        ...prev,
        { id: Date.now(), text, time, completed: false },
      ]);
      setText("");
      setTime("00:00");
    } else {
      alert("Text required!");
    }
  }
  return (
    <div className="todo">
      <div className="todo-top">
        <div className="todo-form">
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
        <button onClick={handleAdd} className="todo-btn">
          Add
        </button>
      </div>
      <div className="todo-body">
        {data.map((item) => {
          return <TodoItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
