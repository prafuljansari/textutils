import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Wether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert();
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }else if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const toggleToColors = (color)=>{
    if(color === null){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }else if(color.toLowerCase() === 'darkblue'){
      setMode(color.toLowerCase());
      document.body.style.backgroundColor = '#00003B';
      showAlert("Dark Blue mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleToColors={toggleToColors} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}/> */}
          <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
