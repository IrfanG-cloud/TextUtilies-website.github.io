import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0a3870';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    <>
   {/* <Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} /> */}
   {/* <Navbar/> */}
   <Router>
    <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert ={showAlert} heading="Enter the text to Analyze" mode={mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}
export default App;
