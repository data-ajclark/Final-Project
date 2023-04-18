import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Main from './Components/Main.js';
import CharacterMain from './Components/CharacterMain.js';
import Games from './Components/Games.js';
import CommentsBoard from './Components/CommentsBoard.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/CharacterMain" element={<CharacterMain />} />
      <Route path="/Games" element={<Games />} />
      <Route path="/CommentsBoard" element={<CommentsBoard />} />  
    </Routes> 
   </BrowserRouter>
  );
}

export default App;
