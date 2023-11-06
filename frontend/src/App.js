import './App.css';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import Home from './Home';


function App() {
  return (
   <BrowserRouter>
      <Routes >
        <Route path="/" element={<Login/>}/>  {/* Login is the component that will be rendered when we navigate to / */}
        <Route path="/signup" element={<Signup/>}/>  {/* signup is the component that will be rendered when we navigate to / */}
        <Route path="/home" element={<Home/>}/>  {/* signup is the component that will be rendered when we navigate to / */}

      </Routes>
   </BrowserRouter>
  );
}

export default App;
