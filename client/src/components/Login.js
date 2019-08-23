import React, { useState, useReducer } from "react";
import { reducer, initialState } from './reducers/LoginReducers';

import axios from 'axios';

const Login = () => {
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

      })
      .catch(err => {
        console.log(err.response);
      })

      setNewUser('');
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      
    
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
    </>
  );
};

export default Login;
