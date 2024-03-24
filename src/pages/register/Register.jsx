
import "./register.css"
function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h2 className="loginLogo">Foma Social</h2>
                <span className="loginDesc">Connect all around</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Username" className='loginInput' placeholder='Username' />
                    <input type="Email" className='loginInput' placeholder='Email' />
                    <input type="password" className='loginInput' placeholder='Password' />
                    <input type="password" className='loginInput' placeholder='Confirm Password' />
                    <button className="loginButton">Sign up</button>
                    <span className="loginForgot">Already have account? Login</span>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Register
