import React from 'react';
import Game from './pages/Game';
import './index.css';

function App() {
  // Ignoriamo Auth e Database per un momento
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Game />
    </div>
  );
}

export default App;
