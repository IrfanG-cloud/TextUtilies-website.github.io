import React, {useState} from 'react'


export default function TextForm(props) {
    
    //Uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    // lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    // clear text
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    // copy text
    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success");
    }

    // Extra spcases
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spcasess removed!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} style={{backgrundColor: props.mode==='dark'?'grey':'white', 
                color: props.mode==='dark'?'white':'black' }} onChange={handleOnChange} id="myBox" rows="5">
            </textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}> 
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}> 
            Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}> 
            Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}> 
            Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> 
            Remove Extra Spaces
        </button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Sumary</h1>
        <p>{text.split(" ").length} words and, {text.length} characters</p> 
        <p>{0.008 *text.split(" ").length} mintues read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview"}</p>
    </div>
    </>
  )
}
