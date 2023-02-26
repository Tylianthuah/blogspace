import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth">
    <form>
      <h1>Register</h1>
      <input required type="text" placeholder="username" />
      <input required type="email" placeholder="email" />
      <input required type="password" placeholder="password" />
      <button>Register</button>
      {/* <p>There is an error!!</p> */}
      <span>
        Already have an account?
        <Link to="/login" className="login_register">
          Login
        </Link>
      </span>
    </form>
  </div>
  )
}

export default Register