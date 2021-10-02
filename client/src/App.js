import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import Home from './pages/Home';
import Result from './pages/Result';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Route path="/home" exact  component={Home} />
          <Route path="/result" exact  component={Result} />
      </BrowserRouter>
    </div>
  )
}

export default App;
