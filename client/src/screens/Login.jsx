import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/CSS/Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='login-parent'>
      <div className='login-glass-card'>
        <h3 className='login-title'>Login Here:</h3>
        <form
          className='login-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
        >
          <div className='login-form-content'>
      <label className='login-label-username'>
            Username:
            <br/>
            <input
          className='login-username'
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          />
      </label>
      <br />
      <label className='login-label-password'>
            Password:
            <br/>
            <input
          className='login-password'
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          />
      </label>
      <br />
          </div>
      <button className='login-btn' >Sign in</button>

          <div className='login-redirect-container'>
      <h4 className='login-redirect-content'>Don't Have an Account?<Link to="/register"> Register Here</Link></h4>
          </div>

      </form>
          </div>
      </div>
  );
}