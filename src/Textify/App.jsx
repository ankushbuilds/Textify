import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import TextForm from './TextForm'
import About from './About'
import Alert from './Alert'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  }

  const toggleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0b1220'
      document.body.style.color = '#e6edf3'
      document.body.style.transition = 'background-color 200ms ease, color 200ms ease'
      showAlert("Dark mode has been enabled.", "Success !!");
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#f5f7ff'
      document.body.style.color = '#0b1220'
      document.body.style.transition = 'background-color 200ms ease, color 200ms ease'
      showAlert("Light mode has been enabled.", "Success !!");
    }
  } 

  return (
  <>
  <Router basename = "/Textify">
      <Navbar
        title="Textify"
        aboutText="About Us"
        homeText="Home"
        mode={mode}
        toggleDarkMode={toggleDarkMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
           exact path="/"
            element={
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            }
          />
        </Routes>
      </div>
    </Router>
      </>

  );
}

export default App;