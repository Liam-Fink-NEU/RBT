import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tabs from './Tabs';
import Home from './Home';
import Home1 from './Home1';
import Rose from './Rose';
import Bud from './Bud';
import Thorn from './Thorn';
import LogIn from './LogIn';
import CreateAccount from './CreateAccount';
import Archives from './Archives';
import Resources from './Resources';
import ExampleResources from './ExampleResources';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LogIn} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/Home1' component={Home1} />
      <Route exact path='/Rose' component={Rose} />
      <Route exact path='/Bud' component={Bud} />
      <Route exact path='/Thorn' component={Thorn} />
      <Route exact path='/LogIn' component={LogIn} />
      <Route exact path='/CreateAccount' component={CreateAccount} />
      <Route exact path='/Archives' component={Archives} />
      <Route exact path='/Resources' component={Resources} />
      <Route exact path='/ExampleResources' component={ExampleResources} />
    </Router>
  );
}

export default App;
