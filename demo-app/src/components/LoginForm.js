import React from 'react'

const LoginForm = ({ handleLogin }) => (
  <form>
    <fieldset>
      <div>
        <label>User name</label>
        <input type='text' name='username' />
      </div>
      <div>
        <label>Password</label>
        <input type='password' name='password' />
      </div>
      <div>
        <button id='login' onClick={() => handleLogin(true)}>Login</button>
      </div>
    </fieldset>
  </form>
)

export default LoginForm
