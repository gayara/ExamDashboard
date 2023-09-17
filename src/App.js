
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Routes>
    <Route exact path={'/admin' } element ={<AdminLayout/>}>
    <Route exact path={'dashboard' } element ={<Dashboard/>}></Route>
    </Route>
    
    </Routes>
    </>

  );
}

export default App;
