import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import ErrorHandler from "../ErrorHandler/ErrorHandler"
import { useState } from 'react';

const Login = () => {
  const { login } = useAuth()
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    const { email, password } = e.target.elements;
  
    try {
      await login(email.value, password.value)
      history.push("/")
    } catch (error) {
        setErrorMessage(error.message);
      }
  
    
  }
  
    return (
      <>
        <ErrorHandler>{errorMessage}</ErrorHandler>
        <main className='form'>

            <h1 className="title">Login</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <p>E-mail:</p>
                <input type="email" placeholder="Email..." name="email" />
            </div>

            <div>
                <p>Password:</p>
                <input type="password" placeholder="Password..." name="password" />
            </div>
            <div> 
                <button>Login</button>
            </div>
        </form>
        </main>
        </>
    );
    }
    
    export default Login

