import React from 'react';
import { AppContextProvider } from './context'
import Decrement from './Decrement'
import Increment from './Increment'
import Display from './Display'

import './App.css';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Display />
        <Increment />
        <Decrement />
      </AppContextProvider>
    </div>
  );
}

export default App;
