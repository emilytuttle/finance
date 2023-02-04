import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import './App.css';
import AuthContext from './store/authContext';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={!authCtx.token ? <Login/> : <Navigate to='/home'/>}/>
          <Route path='/home' element={authCtx.token ?<Home/> : <Navigate to='/login'/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </div>      
      
    </div>
  );
}

export default App;
