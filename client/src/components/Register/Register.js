import {useState} from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../../config/config";

function Register() {
    const [currentUser, setCurrentUser] = useState(null);    
    const handleSubmit = (e) => {
      e.preventDefault();    
      const { email, password } = e.target.elements;
      try {
        firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
        setCurrentUser(true);
      } catch (error) {
        alert(error);
      }
    };
    if (currentUser) {
        return <Redirect to="/dashboard" />;
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
                    <button>Register</button>
                </div>
            </form>
        </main>
    );
    }
    
    export default Register;

