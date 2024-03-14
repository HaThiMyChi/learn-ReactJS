import Header from 'components/Header';
import { useEffect } from 'react';
import './App.css';
import ProductApi from './api/productApi';
import { Routes, Route } from "react-router-dom";
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10
      };

      const productList = await ProductApi.getAll(params);
    }
    fetchProducts();
  }, []);


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
      <Header />

      {/* Home page */}
      <Routes>
        <Route path="/" exact element={<CounterFeature />} />
        {/* <Route path="/" exact element={<TodoFeature />} /> */}
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        {/* </Routes> */}
        {/* <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p> */}
        {/*       
      <Routes>
        <Route path="/home" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
