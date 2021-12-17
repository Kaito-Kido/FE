import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import Report from '../pages/Report/Report';
import Search from '../pages/Search/Search';
import Setting from '../pages/Setting/Setting';
import Table from '../pages/Table/Table';
import Login from '../components/Login/Login';
import useToken from './useToken';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }
 
  return (
    <>
      <Router>
        <Navbar />
        <div class='flex'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/report' element={<Report />} />
            <Route path='/list' element={<List />} />
            <Route path='/search' element={<Search />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/table' element={<Table />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
