import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Create from './Create';

// filename app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/create' element={<Create/>} /> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;