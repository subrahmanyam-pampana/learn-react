// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";

function App() {
  let [mode,setMode] = useState('light');
  let handleToggelMode = (event)=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
    }else{
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <NavBar title="My First React App" mode={mode} onToggleMode={handleToggelMode} aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About mode={mode} onToggleMode={handleToggelMode}/> */}
      </div>
    </>
  );
}

export default App;
