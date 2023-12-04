import { json, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/auth/apiSlice3";
import { useEffect, useState } from "react";
import { authActions } from "../../store/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, data, error }] = useLoginMutation();

  const initialRegisterValues = { username: "", password: "" };
  const [formData, setFormData] = useState(initialRegisterValues);
  const { username, password } = formData;

  // const state = useSelector((state) => state);
  // console.log("state:", state);

  // const { user } = useSelector((state) => state.auth.user);
  // console.log("user:", user);

  // useEffect(() => {
  //   if (user) {
  //     alert(user);
  //   }
  // }, [navigate, user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("formData:", formData);

    try {
      const response = await login({ username, password }).unwrap();
      console.log("response:", response);

      if (response) {
        // localStorage.setItem("user", JSON.stringify(response));
        dispatch(authActions.setUser(response));
        // navigate("/");
      }
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
        Login
      </button>
    </form>
  );
};

export { Login };
