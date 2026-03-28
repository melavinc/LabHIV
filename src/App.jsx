import React from 'react';
import Game from './pages/Game';
import './index.css';

// Rimuoviamo tutti i "lucchetti" (AuthProvider, QueryClient, ecc.)
function App() {
  return (
    // La classe "dark" serve per attivare i colori che hai nel CSS
    <div className="dark min-h-screen bg-background text-foreground">
      <Game />
    </div>
  );
}

export default App;
