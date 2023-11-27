import React from "react";
import TaskItem from "./TaskItem";

import {Button} from '@material-ui/core';

const TaskList = props => {
  const { list, setList } = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  const chk = list.map(item => (
    <TaskItem key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {list.length ? chk : "Exclente! No hay nada pendiente!"}
      {list.length ? (
        <p>
          <Button color="secondary" variant="contained" onClick={onClickRemoveItem}> Eliminar todas las completadas! </Button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;