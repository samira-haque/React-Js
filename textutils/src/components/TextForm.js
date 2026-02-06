import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Üppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState("Enter Text Here");
    // setText("new Text"); to change the state
  return (
    <div>
        <h1>{props.heading}</h1>
  <div class="mb-3">
    <textarea class="form-control"value={text} onChange={handleOnChange} id="MyTextBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
    </div>
  )
}
