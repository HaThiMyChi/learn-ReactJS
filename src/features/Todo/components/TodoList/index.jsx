import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList({todoList, onTodoClick}) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }
    // nó nhận props là todoList
    return ( 
        // dấu ngoặc tròn tạo ra jsx
        <ul className='todo-list'>
           {todoList.map((todo, idx) => (
            <li key={todo.id} 
                className={classnames({
                    'todo-item': true,
                    completed: todo.status === 'completed'})}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                {todo.title}
            </li>
           ))} 
           
        </ul>
    );
}

export default TodoList;