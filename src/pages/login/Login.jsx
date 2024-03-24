import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h2 className="loginLogo">Foma Social</h2>
                <span className="loginDesc">Connect all around</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className='loginInput' placeholder='Email' />
                    <input type="password" className='loginInput' placeholder='Password' />
                    <button className="loginButton">Log in</button>
                    <span className="loginForgot">Fogot password?</span>
                    <button className="registerBtn">Create new account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
