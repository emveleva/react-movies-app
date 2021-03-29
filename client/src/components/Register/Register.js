import React, {useState, useContext} from 'react';
import { AuthContext } from "../../contexts/AuthContext"
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom"
import ErrorHandler from "../ErrorHandler/ErrorHandler"

export default function Register() {
  const [user, setUser] = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const [repeatPassword, setRepeatPassword] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault();
      return fetch('http://localhost:4003/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password, rePassword})
    }).then(res => res.json())
        .then((res) => {
            if (res.message) throw new Error(res.message);
            setUser({_id: res.user._id, username: res.user.username})
        }).catch(err => {
            setErrorMessage(err.message)
        });
    }


  const updateUsername = (e) => {
      setUsername(e.target.value)
  }
  const updatePassword = (e) => {
      setPassword(e.target.value)
  }
  const updateRepeatPassword = (e) => {
      setRepeatPassword(e.target.value)
  }

  if (user.username !== '') {
      return <Redirect to="/"/>;
  }
    return (
      <>
      <ErrorHandler>{errorMessage}</ErrorHandler>
        <main className='form'>
            <h1 className="title">Register</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <p>Username:</p>
                    <input type="username" placeholder="Username" name="username" value={username} onChange={updateUsername} />
                </div>
                <div>
                    <p>Password:</p>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={updatePassword} />
                </div>
                <div>
                    <p>Repeat Password:</p>
                    <input type="password" placeholder="Re-password" name="rePassword" value={repeatPassword} onChange={updateRepeatPassword}/>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </main>
        </>
    );
    }


