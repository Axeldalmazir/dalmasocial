import './login.css'

// Structure of the Login page Component
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
        {/* Left section of the Login page */}
            <div className="loginLeft">
                <h3 className="loginLogo">Dalmasocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around Dalmasocial
                </span>
            </div>
        {/* Right section of the Login page */}
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password ?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
