import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../config/Auth";
import firebaseConfig from "../../config/config.js";

const Login = () => {
  let isLogged = false;
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {
          firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
          isLogged = true;
        } catch (error) {
          console.log(error);
        }
      };
      if (isLogged) {
         <Redirect to="/dashboard" />;
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

