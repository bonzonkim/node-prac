import { Route, Link, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './App.css'


function App() {
  return (
   <div>

      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
      </Routes>

   </div> 
  )
}

export default App;
