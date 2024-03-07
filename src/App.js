import React from 'react';
import './App.css';
import AlbumFeature from './features/Album';
import Counter from './components/Counter';
import TodoFeature from './features/Todo';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  const name = 'Hau';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };

  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Chi <p>{name} - {isMale ? 'Male' : 'Female'}</p>
        </p>

        {isMale ? <p>Male</p> : <p>Female</p>} */}

      {/* Co the dung the div hoac dung React.Fragment */}

      {/* {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        <p>{student.name}</p> */}

      {/* Lam viec voi cai mang thì phải truyền vào cái key, để nó hiểu mỗi mảng có key duy nhất */}
      {/* <ul>
          {colorList.map(color => (
            <li key={color} style={{color}}>{color}</li>
          ))}
        </ul> */}

      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}


      {/* <AlbumFeature /> */}
      {/* <TodoFeature /> */}
      Home page
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>

    </div>
  );
}

export default App;
