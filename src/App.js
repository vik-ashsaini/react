// import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import Form from './componenets/Form'
import About from './componenets/About';
import Alert from './componenets/Alert'
import { useState } from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  const [mode ,setMode] = useState('light');
  const [alert ,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us" />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/' element={<Form showAlert={showAlert} mode={mode} heading="Enter the text  to Analyse below" />}>
          </Route>
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
