import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Modal from "./Modal";

export default function TodoList() {
  const [text, setText] = useState("");
  const [time, setTime] = useState("00:00");
  const [data, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
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
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setData((prev) =>
        prev.filter((item) => {
          return item.id != id;
        })
      );
    }
  }
  function handleComplete(id) {
    setData((prev) =>
      prev.map((item) => {
        if (item.id == id) {
          item.completed = true;
        }
        return item;
      })
    );
  }
  function handleEdit(item) {
    setOpen(item);
  }
  function handleClose() {
    setOpen(false);
  }
  function handleSave(text, time, id) {
    setData((prev) =>
      prev.map((item) => {
        if (item.id == id) {
          item.text = text;
          item.time = time;
        }
        return item;
      })
    );
    handleClose();
  }
  function completedTasks() {
    return data.reduce((acc, item) => {
      if (item.completed) {
        acc++;
      }
      return acc;
    }, 0);
  }
  const completedCount = completedTasks();
  return (
    <div className="todo">
      <div className="todo-tasks">
        {data.length > 0 && (
          <h2 className="todo-value">
            Tasks completed: {completedCount}/{data.length}
          </h2>
        )}
      </div>
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
          return (
            <TodoItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
  
    </div>
  );
}
