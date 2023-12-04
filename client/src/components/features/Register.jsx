import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useRegisterMutation } from "../../store/auth/apiSlice2";

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading, data, error }] = useRegisterMutation();

  const initialRegisterValues = { username: "", password: "" };
  const [formData, setFormData] = useState(initialRegisterValues);
  const { username, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("formData:", formData);

    try {
      await register({ username, password }).unwrap();
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        placeholder="Username"
        onChange={onChange}
        className="input"
      />
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={onChange}
        className="input"
      />
      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
};

export { Register };
