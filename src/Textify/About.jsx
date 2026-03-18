import React from "react";

function About({ mode = "light" }) {
  const myStyle = {
    color: mode === "dark" ? "#e6edf3" : "#0b1220",
    backgroundColor: mode === "dark" ? "#0b1220" : "#f5f7ff",
    borderColor: mode === "dark" ? "#1f2a3a" : "#d1d9ff",
  };

  return (
    <>
   
      <div className="container" style={myStyle}>
         <h2>About Us</h2>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={myStyle}
              >
                <strong>About Textify</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body" style={myStyle}>
                Textify is a simple and efficient text utility tool designed to help you manipulate and analyze text with ease. Whether you need to convert text to uppercase or lowercase, remove extra spaces, or copy text to your clipboard, Textify has you covered.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={myStyle}
              >
                <strong>Features</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style={myStyle}>
                 Textify is a text utility tool that provides various features to manipulate and analyze text. Some of the features include converting text to uppercase, converting text to lowercase, removing extra spaces, copying text to clipboard, and speaking the text using text-to-speech functionality. Textify also provides a dark mode for better readability in low light conditions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style={myStyle}
              >
               <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style={myStyle}>
               To use Textify, simply enter your text into the textarea provided on the home page. You can then use the various buttons to manipulate and analyze your text as needed. For example, you can click the "Convert to Uppercase" button to convert your text to uppercase, or click the "Remove Extra Spaces" button to remove any extra spaces from your text. You can also copy your text to the clipboard or have it spoken using the text-to-speech functionality. Textify is designed to be user-friendly and efficient, making it a great tool for anyone who needs to work with text on a regular basis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
