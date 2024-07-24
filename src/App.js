import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Sign_Up from './pages/Sign_Up';

import Sign_in from './pages/Sign_in';
import Home from './pages/Home';


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/SignUp' element={<Sign_Up />}></Route>
        <Route path='/Signin' element={<Sign_in />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
