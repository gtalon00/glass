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
        <h3 className='register-title'>Register :</h3>
        <form
          className='register-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
      >
    <div className='register-form-content'>
      <label className='register-label-username'>
        <p className='register-label-text'>Username:</p>
        <input
          className='register-username register-input' 
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          />
      </label>
      <br />
      <label className='register-label-email'>
        <p className='register-label-text'>Email:</p>
        <input 
        className='register-email register-input'
        type="text" 
        name="email" 
        value={email} 
        onChange={handleChange} />
      </label>
      <br />
      <label className='register-label-password'>
        <p className='register-label-text'>Password:</p>
        <input
          className='register-password register-input'
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
      <h4 className='register-redirect-content'><i>Have an Account?</i><Link className='redirect-link' to="/login">Log in Here</Link></h4>
      </div>
        </form>
      </div>
    </div>
  );
}
