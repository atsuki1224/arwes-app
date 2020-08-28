import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, Arwes, Button } from 'arwes';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes>
      <h1>My App</h1>
      <p>A SciFi Project</p>
      <div style={{ padding: 20 }}>
        <Button>My Button</Button>
      </div>
    </Arwes>
  </ThemeProvider>
);
export default App;
ReactDOM.render(<App />, document.querySelector('#root'));
