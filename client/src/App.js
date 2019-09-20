import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

//Imported
import PrivateRoute from "./components/PrivateRoute";
import { Link } from 'react-router-dom';
import BubblePage from './components/BubblePage';
import axios from 'axios';

function App() {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err.response));
  })

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Login</Link>

          <Link to='/bubblepage'>Bubble Page</Link>
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
