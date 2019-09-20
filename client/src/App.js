import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

//Imported
import PrivateRoute from "./components/PrivateRoute";
import { Link } from 'react-router-dom';
import BubblePage from './components/BubblePage';


function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Login</Link>

          <Link to='/protected'>Bubble Page</Link>
        </nav>


        <Switch>
          <Route exact path="/" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}

          <PrivateRoute path='/bubblepage' component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
