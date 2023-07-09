
import './App.css';
import Alert from './component/Alert';
//import About from './component/About';
import Navbar from './component/Navbar';
import Utillform from './component/Utillform';
import React, { useState } from 'react'; // imrs short cut to import
// import {
//   BrowserRouter as Box,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // useState short cut for snippet
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#484B61";
      showAlert("Dark mode is on", "success ! ");
      document.title = "Tectutills - Dark Mode";    // we can set an interval also fo this
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is off ", "info ! ");
      document.title = "Tectutills - Light Mode";
    }
  }
  return (
    <>
     {/* <Box> */}

      <Navbar title="TextUtills" about="About" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      <Utillform mode={mode} showAlert={showAlert} heading="Enter Your Text Here To Start "/>
      {/* <Routes> */}
       {/* <Route exact path="/"  element={<Utillform mode={mode} showAlert={showAlert} heading="Enter Your Text Here To Start "/>}     />
       <Route exact path="/about"  element={<About mode={mode} />}     /> */}
       
       </div>
     
      {/* </Routes>
      </div>
      </Box> */}

    </>
  );
}

export default App;
