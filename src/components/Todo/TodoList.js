import React, { useReducer, useState } from "react";

const initialState = {
  id: 0,
  name: "",
  description: "",
  status: "completed",
};
const reducer = (state, action) => {
  if (action.type === "fieldChange") {
    return {
      ...state,
      [action.field]: action.value,
    };
  } else if (action.type === "setField") {
    return action.value;
  }
};

function TodoList({ todoListData, handleUpdate, handleRemove }) {
  const [todoState, dispatcher] = useReducer(reducer, initialState);
  const { name: uName, description: uDescription, status: uStatus } = todoState;
  const [editId, setEditId] = useState(-1);
  const handleEdit = (data) => {
    setEditId(data.id);
    dispatcher({
      type: "setField",
      value: data,
    });
  };

  const submitData = () => {
    handleUpdate(todoState);
    setEditId(-1);
  };

  const onChange = (e) => {
    dispatcher({
      type: "fieldChange",
      field: e.target.name,
      value: e.target.value,
    });
  };
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
            {todoListData.map((data) =>
              data.id === editId ? (
                <tr key={data.id}>
                  <td>
                    <input
                      type="text"
                      value={uName}
                      name="name"
                      onChange={onChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="description"
                      value={uDescription}
                      onChange={onChange}
                    />
                  </td>
                  <td>
                    <select
                      id="status"
                      value={uStatus}
                      name="status"
                      onChange={onChange}
                    >
                      <option value="completed">completed</option>
                      <option value="in-progress">in-progress</option>
                      <option value="open">open</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => submitData()}>Submit</button>
                  </td>
                </tr>
              ) : (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.description}</td>
                  <td>{data.status}</td>
                  <td>
                    <button onClick={() => handleRemove(data)}>Remove</button>
                    <button onClick={() => handleEdit(data)}>Update</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        "No data to Show"
      )}
    </div>
  );
}

export default TodoList;
