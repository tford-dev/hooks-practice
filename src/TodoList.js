import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
    return (
        <Paper>
            <List>
                {todos.map((todo)=>(
                    <div>
                        <Todo
                            task={todo.task}
                            completed={todo.completed}
                            key={todo.id}
                            id={todo.id}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                    </div>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;