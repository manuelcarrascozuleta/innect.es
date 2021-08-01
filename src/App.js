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
< ramaClase4
    <ThemeProvider  theme ={theme}>
      <NavBar />
      <ItemListContainer greeting="Creamos Soluciones Digitales Eficaces"/>
    </ThemeProvider>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto innect primer clase
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
> main
  );
}

export default App;
