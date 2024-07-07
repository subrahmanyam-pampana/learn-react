import React, { useState } from "react";

export default function TextForm({heading="Heading here",mode="light"}) {
  let [text, setText] = useState("");

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = (event) => {
    setText(text.toUpperCase());
  };

  return (
    <div style={{color:mode==='dark'?'white':'black'}}>
      <div >
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleTextAreaChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: mode==='dark'?'#6c757d8f':'white', color:mode==='dark'?'white':'black'}}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
      
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>your text has <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <h2>Preview</h2>
        <p>{text && text.length>0?text: <i>Enter Some text to Preview</i>}</p>
      </div>
    </div>
  );
}
