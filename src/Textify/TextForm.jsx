import React, {useState} from 'react' 

export default function TextForm(props) {
  
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText); // updated the state with the new text in upper case
    props.showAlert("Converted to Uppercase !!", "Success !!"); 

  };

    const handleOnChange = (event) => {
      setText(event.target.value); // updated the state with the new text in the textarea
    };

    const removeText = () => {
      setText(""); // updated the state with an empty string to remove the text in the textarea
      props.showAlert("Text cleared !!", "Success !!");
    };


const RemoveExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed !!", "Success !!");
};
    const lowerCase = () => {
      let newText = text.toLowerCase();
      setText(newText); 
      props.showAlert("Converted to Lowercase !!", "Success !!");
    };
    const copyText = () => {
      navigator.clipboard.writeText(text); 
      alert("Text copied to clipboard !!");
    };
    const speakText = () => {
      let msg = new SpeechSynthesisUtterance(); // SpeechSynthesisUtterance is a web API that allows you to convert text to speech.
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Text is being spoken !!", "Success !!");
    };
    const [text, setText] = useState("");

    const myStyle = {
      color: props.mode === 'dark' ? '#e6edf3' : '#0b1220',
      backgroundColor: props.mode === 'dark' ? '#0b1220' : '#f5f7ff',
      borderColor: props.mode === 'dark' ? '#1f2a3a' : '#d1d9ff',
    }

  
  return (
    <>
      <div className="container" style={myStyle}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{ backgroundColor: myStyle.backgroundColor, color: myStyle.color }}
            ></textarea>
          </div>
    <button disabled={text.length === 0} className = "btn btn-primary mx-2 my-1" onClick={upperCase}>Convert to Uppercase</button>
    <button disabled={text.length === 0} className='btn btn-dark mx-2 my-1' onClick={lowerCase}>Convert to Lowercase</button>
    <button disabled={text.length === 0} className = "btn btn-success mx-2 my-1" onClick={copyText}>Copy</button>
    <button disabled={text.length === 0} className = "btn btn-secondary mx-2 my-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    <button disabled={text.length === 0} className = "btn btn-danger mx-2 my-1" onClick={removeText}>Clear Text</button>
    <button disabled={text.length === 0} className = "btn btn-warning mx-2 my-1" onClick={speakText}>Text to speech</button>


 </div>
 <div className="container my-3">
  <h2>Your Text Summary</h2>
  <p>{text.split(/\s+/).filter((element) => { return element.length !== 0; }).length } Words || {text.length}  Characters</p>
  <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0; }).length} Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length > 0 ? text : "Nothing to preview"}</p>
 </div>
  </div>
  </>
  )
}

