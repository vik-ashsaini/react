// import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import Form from './componenets/Form'
// let name ="Vikash";

function App() {
  return (
    <>
      <Navbar title="TextUtils"  about= "About Us" />
      {/* <Navbar title="TextUtils"   /> */}
      {/* <Navbar  /> */}
      <div className='container my-3'>
        <Form heading="Uppercase Converter" />
      </div>
    </>    
  );
}

export default App;
