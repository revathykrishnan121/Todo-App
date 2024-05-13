import React, { useReducer } from "react";

const initialState = {
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
  } else if (action.type === "clearField") {
    return initialState;
  }
};

function AddTodo({ handleSubmit }) {
  const [todoState, dispatcher] = useReducer(reducer, initialState);
  const { name, description, status } = todoState;
  const submitData = (event) => {
    event.preventDefault();
    handleSubmit({
      ...todoState,
      id: Math.random(),
    });
    dispatcher({ type: "clearField" });
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
      <h1>Add Todo</h1>
      <form onSubmit={(e) => submitData(e)}>
        <div className="labelBox">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="labelBox">
          <label htmlFor="desc">Description: </label>
          <input
            id="desc"
            type="text"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="labelBox">
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} name="status" onChange={onChange}>
            <option value="completed">completed</option>
            <option value="in-progress">in-progress</option>
            <option value="open">open</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
