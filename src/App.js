
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
    {/* <Register/>
    <Login/> */}


    <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          {/* <Route path="/Notes" element={<Notes/>} /> */}
        </Routes>
      </Router>

   </>
  );
}

export default App;
