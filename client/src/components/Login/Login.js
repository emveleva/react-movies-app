function Login() {
    return (
        <div className='form'>
            <h1>Login</h1>

        <form action="/#login" method="POST">
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
        </div>
    );
    }
    
    export default Login

