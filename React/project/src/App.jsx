import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'
import Classrooms from './pages/Classrooms';
import Assessments from './pages/Assessments';
import Store from './pages/Store';
import Calendar from './pages/Calendar';
import News from './pages/News';
import Blog from './pages/Blog';
import Pagenotfound from './pages/Pagenotfound'; 

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Classrooms' element={<Classrooms/>}/>
        <Route path='/Assessments' element={<Assessments/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/Calendar' element={<Calendar/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
