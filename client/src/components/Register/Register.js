function Register() {
    return (
        <div className='form'>
            <h1>Register</h1>

            <form action="/#register" method="POST">
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
        </div>
    );
    }
    
    export default Register

