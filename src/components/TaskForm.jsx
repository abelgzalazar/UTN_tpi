import React, { useState } from "react";
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';

const TaskForm = (props) => {
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
      <h1>Lista de tareas</h1>
      <div className="taskform">
        <div className="taskform-text">
          <TextField 
            className="text"
            label="Agregar una tarea..." 
            value={description}
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="taskform-button">
          <Button
           type="submit"
           color="primary" 
           variant="contained" 
           disabled={description ? "" : "disabled"}
           > Agregar 
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
