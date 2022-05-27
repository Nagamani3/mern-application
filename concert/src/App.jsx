
import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Toggle from './Pages/Toggle';
import Common from './Pages/Common';
import "./global.css";
import Slider from './Pages/Slider';
import Navbar from './Pages/Navbar';
import "./sliders.css"

export let store = createContext()




function App() {
  let [token, setToken] = useState(null)
  console.log(token)
 
  return (
    <store.Provider value={[token, setToken]}>
      <Router>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </store.Provider>
    //  <Toggle/>
    // <Common/>
  );
}

export default App;
