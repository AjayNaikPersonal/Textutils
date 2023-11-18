import React, { useState } from 'react';

export default function TextArea(props) {

  const [text, setText] = useState();

  //my functions
    const HandleUpperCase = () => {
      let myText = document.getElementById('my-textArea').value;
      myText = myText.toUpperCase(); // Store the uppercase text in the same variable
      setText(myText);
    }

    const HandleLowerCase = () =>{
      let myText = document.getElementById('my-textArea').value;
      myText = myText.toLowerCase(); // Store the uppercase text in the same variable
      setText(myText);
    }
    const HandleClear = () =>{
      let myText = document.getElementById('my-textArea').value;
      myText = '';
      setText(myText);
    }
  return (
    <>
      <div className="container my-3" style={{backgroundColor : props.mode === 'light'?'white':'#042743'}}>
        <h2 className='p-10' style={{color : props.mode === 'light'?'black':'white'}}>{props.TextAreaTitle}</h2>
        <div className="my-3">
          <textarea
            className="form-control"
            id="my-textArea"
            rows="8"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{color : props.mode === 'light'?'black':'white',
                   backgroundColor : props.mode === 'light'?'white':'black',}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpperCase}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleLowerCase}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleClear}>
          Clear space
        </button>
      </div>
    </>
  );
}
