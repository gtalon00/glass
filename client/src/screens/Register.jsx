import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/CSS/Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='register-parent'>
      <div className='register-glass-card'>
        <h3 className='register-title'>Register Here:</h3>
        <form
          className='register-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
      >
<div className='register-form-content'>
      <label className='register-label-username'>
        Username:
        <input
          className='register-username'
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          />
      </label>
      <br />
      <label className='register-label-email'>
        Email:
        <input 
        className='register-email'
        type="text" 
        name="email" 
        value={email} 
        onChange={handleChange} />
      </label>
      <br />
      <label className='register-label-password'>
        Password:
        <input
          className='register-password'
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          />
            </label>
      <br />
        </div>
      <button className='register-btn'>Sign up</button>

      <div className='register-redirect-container'>
      <h4 className='register-redirect-content'>Have an Account? <Link to="/login">Log in Here</Link></h4>
      </div>
        </form>
      </div>
    </div>
  );
}
