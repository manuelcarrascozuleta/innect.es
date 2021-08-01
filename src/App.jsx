import React from 'react';
import "./App.css"
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from "./temaConfig.js"
import NavBar from './components/NavBar';
import Typography from '@material-ui/core/Typography'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer.js';

function App() {

  return (
    <ThemeProvider  theme ={theme}>
      <NavBar />
      <ItemListContainer greeting="Creamos Soluciones Digitales Eficaces"/>
    </ThemeProvider>
    
    
  );
}

export default App;
