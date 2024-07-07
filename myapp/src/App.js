// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let [mode,setMode] = useState('light');
  let handleToggelMode = (event)=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode Enabled!")
    }else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Dark Mode Disabled!")
    }
  }

  const [alert, setAlert]=  useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  return (
    <Router>
      <NavBar title="My First React App" mode={mode} onToggleMode={handleToggelMode} aboutText="About" />
      <Alert alert={alert} />

      <Routes>

          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={
            
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
            
          } />
         
          {/* <Route path="/about">
              <About mode={mode} onToggleMode={handleToggelMode}/>
          </Route>

          <Route path="/" exact >
            <div className="container my-3">
              <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
            </div>
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
