import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        {/*<Route path='/addProduct' element={<AddProduct />}></Route>*/ }
        {/*<Route path='/editProduct/:id' element={<EditProduct />}></Route>*/ }
      </Routes>
    </>
  );
}

export default App;
