import '../components/Login.css'
import googleImg from '../src/assets/icons/google.png'
function Login() {
    return (
        <>
            <section>
                <div id='login'>
                    <h1>Login</h1>
                    <input type="number" required placeholder='Mobile Number' />
                    <div id='check-box'>
                        <div id='checkbox'>
                            <label>
                                <input type="checkbox" />
                                RememberMe
                            </label>
                        </div>
                        <div>
                            <span style={{ color: 'red' }}>Forgot Your Password?</span>
                        </div>


                    </div>
                    <div id='login-btn'>
                        <button>Login</button>
                    </div>
                    <p>Don't have an account? <span style={{ color: 'red' }}>Register a new account</span> </p>

                    <hr />

                    <button id='login-google'> <img src={googleImg} width='20px' alt="" /> Login With Google</button>
                </div>

            </section>
        </>
    );
}
export default Login;