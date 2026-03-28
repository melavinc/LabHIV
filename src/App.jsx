import React from 'react';
import Game from './pages/Game';
import './index.css';

function App() {
  return (
    <main className="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Game />
      </div>
    </main>
  );
}

export default App;
