import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        }
    ]

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');
    // No duoc nhan la todo, index
    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one (khi lam viec voi object, array phai clone no ra truoc khi update moi)
        const newTodoList = [...todoList];

        console.log(todo, idx)
        // Cach 1
        // toggle state
        // const newTodo = {
        //     ...newTodoList[idx],
        //     status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        // }

        // update todoList
        // newTodoList[idx] = newTodo;

        // Cach 
        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        // update todoList
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
       
        setFilteredStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
        console.log('filteredStatus', filteredStatus)
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    /* Ban đầu nó sẽ lọc theo filtered status all thì nó lấy hết, sau đó mình chọn filter(
        ex: có completed thì trong todo có status đó nó mới render ra)
         */

    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || todo.status === filteredStatus);
    
    return (
        <div>
            <h3>Todo List</h3>
            {/* Thu nhat ong render todolist nay di, moi lan co item nao click thi goi handleTodoClick  */}
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>
       
            <div>
                <button className="btn" onClick={handleShowAllClick}>Show All</button>
                <button className="btn" onClick={handleShowCompletedClick}>Show completed</button>
                <button className="btn" onClick={handleShowNewClick}>Show new</button>
            </div>
        </div>
    );
}

export default TodoFeature;