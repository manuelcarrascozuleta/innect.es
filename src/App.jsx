import React from 'react';
import "./App.css"
import Button from '@material-ui/core/Button'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from "./temaConfig.js"
import NavBar from './components/NavBar';
import Typography from '@material-ui/core/Typography'



function App() {

  return (
    <ThemeProvider  theme ={theme}>
      <NavBar />
    </ThemeProvider>
    
    
  );
}

export default App;
