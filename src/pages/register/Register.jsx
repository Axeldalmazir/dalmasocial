import './register.css'


// Structure of the register page
export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
        {/* Left part of the register page */}
            <div className="loginLeft">
                <h3 className="loginLogo">Dalmasocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around Dalmasocial
                </span>
            </div>
        {/* Right part of the register page */}
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Sign up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>

            </div>
        </div>
    </div>
  )
}
