import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import React, { useState } from 'react';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (msg,type)=>{
    setAlert({
      msg : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode enabled", "success")
      document.title = "Textutils - DarkMode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("white mode enabled", "success")
      document.title = "Textutils - LightMode"
    }
  }
  return (
  <>
    <BrowserRouter>
      <Navbar title="TextUtils" Home="Home" About="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <TextArea TextAreaTitle="Write Something below" mode={mode} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
