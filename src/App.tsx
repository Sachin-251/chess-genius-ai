import React from 'react';
import './App.css';
import Board from './components/Board';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/vs-ai" element={<Board />} />
        </Routes>
      </Router>
      {/* <Navbar />
      <div className="app flex justify-center items-center w-full h-full gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.0}} transition={{delay:0.4,duration:0.5}} variants={{hidden:{opacity: 0, y: 50}, visible:{opacity: 1, y: 0}}} >
          <Board />
        </motion.div> */}
    </div>
    
  );
}

export default App;
