import React from 'react';
import TodoItem from './TodoItem';

const TodoComponent = (props) => {
    return (
        <div>
            <h1>Chipotaway</h1>
            <ul>
                {props.todos.map((item, index) => {
                  return <TodoItem item={item}/>
                })}
            </ul>
        </div>
    )
}

export default TodoComponent;