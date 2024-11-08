
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Taskss from './components/Taskss';
import Leaves from './components/Leaves';
import StatusUpdate from './components/StatusUpdate';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignIn/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/home" element={<Dashboard/>}></Route>
              <Route path="/tasks" element={<Taskss/>} ></Route>
              <Route path="/leaves" element={<Leaves/>}></Route>
              <Route path="/su" element={<StatusUpdate/>}></Route>
              <Route path="*" element={<PageNotFound/>}></Route>
              <Route></Route>       
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
