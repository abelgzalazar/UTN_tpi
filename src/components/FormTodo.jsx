import React, { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
    });
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo-list">
        <div className="item-input">
          <input
            type="text"
            className="text"
            value={description}
            placeholder="Detalles de la tarea..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Agregar tarea
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
