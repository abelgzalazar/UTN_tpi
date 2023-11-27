import React, { useState } from "react";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const ListaDeTareas = () => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]); 
  };
  return (
    <>
      <div className="contenedor">
        <TaskForm handleAddItem={handleAddItem} />
      </div>
      <div className="contenedor">
        <TaskList list={list} setList={setList} />
      </div>
    </>
  );
};

export default ListaDeTareas;