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
    <div >
      <div className='stripe'></div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3>Login</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <button>Submit</button>
      <br />
      <br />
      <h4>Don't Have an Account?<Link to="/register"> Register Here</Link></h4>
      <br />
      <br />

      </form>
      </div>
  );
}