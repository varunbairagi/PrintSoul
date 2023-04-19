import React from 'react'

const LoginPage = () => {
  return (
    <>
        <div class="signup">
  <div class="signup-connect">
    <h1>Create your account</h1>
    <a href="#" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>
    <a href="#" class="btn btn-social btn-twitter"><i class="fa fa-twitter"></i> Sign in with Twitter</a>
    <a href="#" class="btn btn-social btn-google"><i class="fa fa-google"></i> Sign in with Google</a>
    <a href="#" class="btn btn-social btn-linkedin"><i class="fa fa-linkedin"></i> Sign in with Linkedin</a>
  </div>
  <div class="signup-classic">
    <h2>Or use the classical way</h2>
    <form class="form">
      <fieldset class="username">
        <input type="text" placeholder="username" />
      </fieldset>
      <fieldset class="email">
        <input type="email" placeholder="email" />
      </fieldset>
      <fieldset class="password">
        <input type="password" placeholder="password" />
      </fieldset>
      <button type="submit" class="btn">sign up</button>
    </form>
  </div>
</div>
    </>
  )
}

export default LoginPage