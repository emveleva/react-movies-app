import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

const Login = () => {
  const { login } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    const { email, password } = e.target.elements;
  
    try {
      await login(email.value, password.value)
      history.push("/")
    } catch {
      console.log("Failed to log in")
    }
  }
  
    return (
        <main className='form'>
            <h1>Login</h1>

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
    );
    }
    
    export default Login

