import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CarList} />
        <Route path="/car" component={CarDetails} />
      </Switch>
    </Router>
  );
}

export default App;
