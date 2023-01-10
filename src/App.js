import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import DummyPage from './components/DummyPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          
          <Route path="/dummypage" element={<DummyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
