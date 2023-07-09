import React, { useState } from "react";

export default function Utillform(props) {
    const handleUpClick = () => {
        console.log("Uppercase button clicked" + text); // this will show in console only
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success ! ");
    };
    const handleLoClick = () => {
        console.log("Lowercase button clicked" + text); // this will show in console only
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success ! ")
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipBoard","success ! ")
      };
    
    
    const removeExtraSpace= () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ") );
        props.showAlert("Extra Space Removed","success ! ")
    };

    const handleOnChange = (event) => {
        // event will be active when we try to type something in textarea.
        console.log("i will set letter");
        setText(event.target.value);
    };

    const [text, setText] = useState("Enter your text here ... "); // state variable

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                    ></label>
                    <textarea
                        style={{ backgroundColor:props.mode==="light"?"white":"#44496A",color: props.mode==='dark'?'white':'black'}}
                        
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="utillBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
                    Remove Extra Space
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>
                    Copied to Clipboard
                </button>
            </div >

            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length}
                </p>

                <p>{0.008 * text.split(" ").length} minute to read </p>
                <h4> Preview </h4>
                <p>{text.length>0 ? text: "Please Write Something To Preview"}</p>

            </div>
        </>
    );
}
