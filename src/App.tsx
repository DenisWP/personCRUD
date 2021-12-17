import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Router from './routes'
import Header from "./components/Header/Index"

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Router />
      </BrowserRouter>
  );
}

export default App;
