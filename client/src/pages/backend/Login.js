import React from 'react'

export default function Login() {
  return (
    <div className="container__login bg-image__login">
      <div className="container__login-box">
        <div className="header__login-box">
          {/* <div className="logo__container__login-box"> */}
          <div className="logo"></div>
          {/* </div> */}
          <h1>Baltimore Happy Hours</h1>
        </div>

        <form>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button className="btn__login-box">Submit</button>
        </form>
        <p className="reset-password">Reset Password</p>
      </div>



    </div>
  )
}
