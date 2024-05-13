import React from "react";

function TodoList({ todoListData, handleUpdate, handleRemove }) {
  return (
    <div>
      <h1>Todo List</h1>
      {todoListData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todoListData.map((data) => (
              <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.status}</td>
                <td>
                  <button onClick={() => handleRemove(data)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "No data to Show"
      )}
    </div>
  );
}

export default TodoList;
