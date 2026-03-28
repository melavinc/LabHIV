import React from 'react';
import Game from './pages/Game';
import { Toaster } from "./components/ui/toaster";
import './index.css';

function App() {
  // Mostriamo direttamente il gioco. 
  // Avvolgiamo tutto in un div con classe "dark" per attivare i tuoi colori CSS.
  return (
    <div className="dark bg-background min-h-screen">
      <Game />
      <Toaster />
    </div>
  );
}

export default App;
