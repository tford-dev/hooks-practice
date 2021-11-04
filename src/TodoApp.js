import React, {useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () =>{
    const initialTodos = [
        {id: 1, task: "Feed the pups", completed: false},
        {id: 2, task: "Shuffle the pups", completed: true},
        {id: 3, task: "Clean the gutters", completed: false},
    ];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}]);
    };

    return (
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >

            <AppBar color='primary' position='static' style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} />
        </Paper>
    )
}

export default TodoApp;