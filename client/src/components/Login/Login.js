import React, {useState, useContext} from 'react';
import { AuthContext } from "../../contexts/AuthContext"
import { Redirect} from 'react-router-dom';
import ErrorHandler from "../ErrorHandler/ErrorHandler"
import {loginUser} from '../../services/authService'

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(username, password)
      .then((resp) => {
          if (resp.message) throw new Error(resp.message);
          setUser({_id: resp.user._id, username: resp.user.username})
      }).catch(err => {
          console.log(err)
          setErrorMessage(err.message)
      });
  
  }


  if (user.username !== '') {
    return <Redirect to="/"/>;
}
  
    return (
      <>
        <ErrorHandler>{errorMessage}</ErrorHandler>
        <main className='form'>

            <h1 className="title">Login</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <p>Username:</p>
                <input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" />
            </div>

            <div>
                <p>Password:</p>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
            </div>
            <div> 
                <button type="submit">Login</button>
            </div>
        </form>
        </main>
        </>
    );
    }
    

