import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const defaultTodoList = [
  {
    id: 1,
    name: "Todo1",
    description: "Todo1 description",
    status: "completed",
  },
  {
    id: 2,
    name: "Todo2",
    description: "Todo2 description",
    status: "in-progress",
  },
];

function TodoManager() {
  const [todoListdata, settodoListData] = useState([]);

  //Setting the todo list
  useEffect(() => {
    settodoListData(defaultTodoList);
  }, []);

  //Adding new todo item
  const handleSubmit = (todoData) => {
    settodoListData([...todoListdata, todoData]);
  };

  //Removing the todo item
  const handleRemove = (todoData) => {
    const removedTodo = todoListdata.filter((data) => data.id !== todoData.id);
    settodoListData(removedTodo);
  };

  return (
    <div>
      <AddTodo handleSubmit={handleSubmit} />
      <TodoList
        todoListData={todoListdata}
        handleRemove={handleRemove}
      ></TodoList>
    </div>
  );
}

export default TodoManager;
