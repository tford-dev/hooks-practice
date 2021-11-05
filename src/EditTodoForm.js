import React from 'react';
import InitialVal from './UseInputState';
import TextField from "@material-ui/core/TextField";

const EditTodoForm = ({task, id, editTodo, toggleEditForm}) =>{
    const [value, handleChange, reset] = InitialVal(task);

    return (
        <form onSubmit = {(event)=> {
            event.preventDefault()
            editTodo(id, value)
            reset()
            toggleEditForm();
        }}>
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    )
}

export default EditTodoForm;