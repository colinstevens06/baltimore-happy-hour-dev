import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Alert } from 'react-bootstrap'


export default function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setErrorMessage('')
      setLoading(true)
      await login(email, password)


    } catch (error) {
      setErrorMessage(error.message)
      setShowError(true)
      setLoading(false)
      return
    }

    history.push("/content-management-system")
  }


  return (
    <div className="container__login bg-image__login">
      <div className="container__login-box">
        <div className="header__login-box">
          <div className="logo"></div>
          <h1>Baltimore Happy Hours</h1>
        </div>

        <form onSubmit={handleSubmit}>
          {
            (showError &&
              (errorMessage.length >= 1) && <Alert variant="danger" onClose={() => setShowError(false)} dismissible>{errorMessage}</Alert>
            )

          }
          <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" />
          <input type="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
          <button disabled={loading} type="submit" className="btn__login-box">Submit</button>
        </form>
        <p className="reset-password">Reset Password</p>
      </div>



    </div>
  )
}
