import React from 'react'
import "./LoginPage.css"
import googleImage from "../images/googlelogo.png"
import appleImage from "../images/applelogo.png"

function LoginPage() {
  return (
    <div className="login-container">
        <h2>Login</h2>
        <input type="email" className="input-field" placeholder="Email"/>
        <input type="password" className="input-field" placeholder="Password"/>
        <button className="login-button submit-button">
            Login
        </button>
        <button className="login-button google-button">
            <img className="button-logo" src={googleImage} alt="Google Logo"/>
            Login with Google
        </button>
        <button className="login-button apple-button">
            <img className="button-logo" src={appleImage} alt="Apple Logo"/>
            Login with Apple
        </button>
    </div>
  )
}

export default LoginPage