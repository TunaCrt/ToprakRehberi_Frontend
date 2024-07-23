import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './component/Welcome';
import Sign_Up from './component/Sign_Up';

import Sign_in from './component/Sign_in';
import Home from './component/Home';
import Navbar from './component/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/SignUp' element={<Sign_Up />}></Route>
        <Route path='/Signin' element={<Sign_in />}></Route>
        <Route path='/home' element={<Home />}></Route>

        {/*<Route path='/addProduct' element={<AddProduct />}></Route>*/ }
        {/*<Route path='/editProduct/:id' element={<EditProduct />}></Route>*/ }
      </Routes>
    </>
  );
}

export default App;
