import React from 'react';

const TodoComponent = (props) => {
    return (
        <div>
            <h1>Chipotaway</h1>
            <ul>
                {props.todos.map((todo, index) => {
                  return <li key={index}>{props.todos[index]}
                  <button>Delete</button>
                  </li>
                })}
            </ul>
        </div>
    )
}

export default TodoComponent;