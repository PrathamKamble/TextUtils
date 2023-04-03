// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
  const [mode, setmode] = useState('#e3f2fd');
  
  const togglemode = () =>{
    if (mode === '#e3f2fd') {
      setmode('dark')
      document.body.style.background = 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)'
    }else{
      setmode('#e3f2fd')
      document.body.style.background = 'linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%)'
    }
  }

  return (
    <>
    <Router>
        <Navbar title= "TextUtils" mode= {mode} togglemode= {togglemode}/>
        <Routes>
          <Route exact path='/' element={<Form mode= {mode} />}/> 
        </Routes>
    </Router>
    </>
  );
}

export default App;
