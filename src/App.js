import React from 'react';
import { Switch,Route} from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage/homePage';

const HatsPage = () => (
  <div>HATS PAGE</div>
);

function App() {
  return (
    <div>
      <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/hats' component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
