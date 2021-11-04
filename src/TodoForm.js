import React from 'react';
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import UseInputState from './UseInputState';

const TodoForm = ({addTodo}) => {
    const [value, handleChange, reset] = UseInputState("");
    return (
        <Paper>
            <form onSubmit={
                (e)=>{
                    e.preventDefault();
                    addTodo(value);
                    reset();
                }
            } >
                <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    )
}

export default TodoForm;
