import React from 'react'
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Usage from './pages/Usage/Usage';
import Bill from './pages/bill/Bill';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/usage" exact component={Usage} />
          <Route path="/bill" exact component={Bill} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
