import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Video from './components/Video';
import Uplode from './components/Uplode';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/videos' element={<Video/>} />
      <Route path='/uplode' element={<Uplode/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />

    </Routes>
    <Footer/>
  </Router>;
}

export default App;
