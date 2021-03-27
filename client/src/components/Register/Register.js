import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import ErrorHandler from "../ErrorHandler/ErrorHandler"

export default function Register() {
  const { register } = useAuth()
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault()
    const { email, password, rePassword } = e.target.elements;
    if (password.value !== rePassword.value) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      await register(email.value, password.value)
      history.push("/")
    } catch (error) {
      setErrorMessage(error.message);
    }

  
    }
    return (
      <>
      <ErrorHandler>{errorMessage}</ErrorHandler>
        <main className='form'>
            <h1 className="title">Register</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <p>E-mail:</p>
                    <input type="email" placeholder="Email..." name="email" />
                </div>
                <div>
                    <p>Password:</p>
                    <input type="password" placeholder="Password" name="password" />
                </div>
                <div>
                    <p>Repeat Password:</p>
                    <input type="password" placeholder="Re-password" name="rePassword" />
                </div>
                <div>
                    <p class="message"></p>
                    <button type="submit">Register</button>
                </div>
            </form>
        </main>
        </>
    );
    }


