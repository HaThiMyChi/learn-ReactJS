import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
ListPage.propTypes = {
    
};

function ListPage(props) {
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

    const location = useLocation();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const param = queryString.parse(location.search);

        return 'all';
    });
    // No duoc nhan la todo, index
    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one (khi lam viec voi object, array phai clone no ra truoc khi update moi)
        const newTodoList = [...todoList];
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

    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    /* Ban đầu nó sẽ lọc theo filtered status all thì nó lấy hết, sau đó mình chọn filter(
        ex: có completed thì trong todo có status đó nó mới render ra)
         */

    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || todo.status === filteredStatus);
    
    const handleTodoFormSubmit = (values) => {

        const newTodo = {
            id: TodoList.length + 1,
            title: values.title,
            status: 'new'
        };

        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>TodoForm</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

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

export default ListPage;