import React, { useLocation } from "react";
import {Route, Routes, useMatch} from 'react-router-dom'
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useMatch('/todos'); // which argument does this take?
    console.log('match', match)
    if (!match) return null;
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<ListPage />} exact/>
                <Route path={`${match.path}/:todoId`} element={<DetailPage />} />
            </Routes>
        </div>
    );
}

export default TodoFeature;