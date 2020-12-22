import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Projects from "./screens/Projects";
import HomeScreen from './screens/HomeScreen'

function App() {
    return (
      <Router>
        <Switch>
         <Route path="/" exact component={HomeScreen} />
         <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    );
}

export default App;
