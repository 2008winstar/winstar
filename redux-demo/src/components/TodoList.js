/**
 * @file file description here.
 * @author winstar
 * @date 2017/9/1
 */

import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
        ))}
    </ul>
)

export default TodoList;
