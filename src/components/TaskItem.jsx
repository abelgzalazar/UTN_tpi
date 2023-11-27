import React, { Fragment } from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const TaskItem = props => {
  const {
    onChange,
    data: { id, description, done }
  } = props;
  return (
    <Fragment>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={done}
              onChange={onChange}
              name={id}
              color="primary"
            />
          }
          label={description}
        />
      </FormGroup>
        
    </Fragment>
  );
};

export default TaskItem;