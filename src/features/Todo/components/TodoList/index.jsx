import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList({todoList}) {

    // nó nhận props là todoList
    return ( 
        // dấu ngoặc tròn tạo ra jsx
        <ul>
           {todoList.map(todo => (
            <li key={todo.id}>{todo.title}</li>
           ))} 
        </ul>
    );
}

export default TodoList;