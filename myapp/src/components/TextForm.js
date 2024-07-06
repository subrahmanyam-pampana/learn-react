import React,{useState} from "react";

export default function TextForm(props) {

  let [text,setText] = useState('');
  
  const handleTextAreaChange = (event)=>{
    setText(event.target.value)
  }

  const handleUpClick = (event)=>{
    setText(text.toUpperCase())
  }

  return (
    <div >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleTextAreaChange} id="myBox" rows="8" />
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
