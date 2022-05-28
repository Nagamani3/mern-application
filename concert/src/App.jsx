
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
import "./sliders.css";
import Reacticons from "./custom icons/Reacticons"
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

export let store = createContext()




function App() {
  let [token, setToken] = useState(null)
  const handleDragEnd = (results) => {
    console.log(results)
  }
 
  return (
    <DragDropContext
      onDragEnd={results => {
        handleDragEnd(results);
      }}
    >
      <Droppable droppableId="body" direction='horizontal' type='verticle'>
        {provided => (
          <div
            className="dnd"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <store.Provider value={[token, setToken]}>
              <Router>
                <header>
                  <Navbar />
                  
                      <Reacticons />
                    {provided.placeholder}
                    
                </header>
                <main>
                  <Routes>
                    <Route path="/posts" element={<Home />} />
                    <Route path="/" element={<Slider />} />
                    <Route path="/Signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </main>
              </Router>
            </store.Provider>
            ;
          </div>
        )}
      </Droppable>
    </DragDropContext>

    //  <Toggle/>
    // <Common/>
  );
}

export default App;
