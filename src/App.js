import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Register from './components/login/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeIndex from './components/login';
import Reset from './components/login/reset';
import Dashboard from './components/main/dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<HomeIndex />} />
            <Route path='/login' element={<Login />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
