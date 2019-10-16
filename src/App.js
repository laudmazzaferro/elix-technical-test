import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Assets from './Components/Assets';
import Entities from './Components/Entities';

function App() {
  return (

    <div className="App">

      <header className="App-header">
        <p>
          Elix technical test
        </p>
      </header>

      <main>
      <Switch>
          <Route exact path="/" render={() => {
            return (
              <Assets/>
            )}}/>
          <Route exact path="/entities" render={() => {
            return (
              <Entities/>
            )}}/>
        </Switch>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
