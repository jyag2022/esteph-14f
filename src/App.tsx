import React from 'react';
import logo from './logo.svg';
import './App.css';
import entradas from './entradas.jpeg';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2" component="h2" sx={{ mt: 2, mb: 4 }}>
          Ahora esta sí es la última pregunta, en serio...
        </Typography>
        <img src={logo} className="App-logo" alt="Feliz San Valentin" />
        <Typography variant="h6" component="h6" sx={{ mt: 4, mb: 2 }}>
          ¿Me acompañas a ver a Morat?
        </Typography>
        <img src={entradas} className="entradas" />
      </header>
    </div>
  );
}
