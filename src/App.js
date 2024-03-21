import Header from 'components/Header';
import { useEffect } from 'react';
import './App.css';
import ProductApi from './api/productApi';
import { Routes, Route } from "react-router-dom";
import TodoFeature from 'features/Todo';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter';
import { Button } from '../node_modules/@material-ui/core/index';
import { useSnackbar } from 'notistack';
import ProductFeature from 'features/Product/index';
import ListPage from 'features/Product/pages/ListPage';
import DetailPage from 'features/Product/pages/DetailPage';

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
  const { enqueueSnackbar } = useSnackbar();

  const showNoti = () => {
    enqueueSnackbar('Successfully register', { varian: 'success' });
  }

  return (
    <div className="App">

      <Button onClick={showNoti}>Show Button</Button>
      <Header />

      {/* Home page */}
      <Routes>
        <Route path="/" exact element={<CounterFeature />} />
        {/* <Route path="/" exact element={<TodoFeature />} /> */}
        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="/products" element={<ProductFeature />} />
        <Route path="/products/:productId" element={<DetailPage />} />
        {/* <Route path="/productss" element={<ListPage />} /> */}
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
