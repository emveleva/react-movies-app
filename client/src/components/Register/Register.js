import React, { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Register() {
  const { register } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    const { email, password, rePassword } = e.target.elements;
    if (password.value !== rePassword.value) {
      return console.log("Passwords do not match")
    }

    try {
      await register(email.value, password.value)
      history.push("/")
    } catch {
      console.log("Failed to create an account")
    }

  
    }
    return (
        <main className='form'>
            <h1>Register</h1>

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
    );
    }


