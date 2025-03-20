'use client';

export default function LoginForm() {
  return (
    <form className="login-form">
      <div className="form-content">
        <input type="text" name="uname" required />
        <label htmlFor="uname">Phone number, username, or email</label>
      </div>
      <div className="form-content">
        <input type="password" name="password" required />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-content">
        <button type="submit">Log in</button>
      </div>
      <div className="form-ending">
        <center>
          <p id="OR">OR</p>
          <span id="line"></span>
        </center>
        <p id="facebook"><i className="fab fa-facebook-square"></i>Login with Facebook</p>
        <a href="#">Forgot password?</a>
      </div>
    </form>
  );
} 