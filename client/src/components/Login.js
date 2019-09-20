import React, { useState, useReducer } from "react";
import { reducer, initialState } from './reducers/LoginReducer';

import axios from 'axios';
import { Card, Context } from './StyledWidgets';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setNewUser] = useState({username: '', password: ''});

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
   setNewUser({...user, [e.target.name]: e.target.value});
  };

  const login = e => {
    e.preventDefault();

    axios.post(`http://localhost:5000/api/login`, user)
      .then(res => {
        console.log(res)

        localStorage.setItem('token', res.data.payload);

        dispatch({ type: 'LOGIN', payload: res.data});

        props.history.push('/bubblepage');

      })
      .catch(err => {
        console.log(err.response);
      })

      setNewUser('');
  }
  console.log(state);

  return (
    <Card>
      <Context>
        <form>
          <div className="form-group">
            <label>Username: </label>

            <input 
              className="form-group"
              type="text"
              name="username"
              placeholder="username"
              value={user.username} required
              onChange={handleChanges}
            />

          </div>

          <div className="form-group">
            <label>Password: </label>

            <input 
              className="form-group"
              type="password"
              name="password"
              placeholder="password"
              value={user.password} required
              onChange={handleChanges}
            />
            
          </div>

          <button type="submit" onClick={login}>Submit</button>

        </form>
      </Context>
    </Card>
  );
};

export default Login;