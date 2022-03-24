import React, { useRef, useContext, useState } from "react";
import { StoreContext } from "../../context/store";
import axios from "axios";
import "./login.css";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(StoreContext);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location = "/";
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="login-page">
        <div className="login-block">
          <h1>Log into your account</h1>

          <form onSubmit={handleSubmit} action="#">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user ti-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  ref={userRef}
                />
              </div>
            </div>

            <hr className="hr-xs" />

            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock ti-unlock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password..."
                  ref={passwordRef}
                />
              </div>
            </div>

            <button
              className="btn btn-primary btn-block"
              type="submit"
              disabled={isFetching}
            >
              Sign in
            </button>

            <div className="login-footer">
              <h6>Or register with</h6>
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa-brands  fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              {error && (
                <span className="span-msg" style={{ color: "red" }}>
                  Wrong Username or Password!
                </span>
              )}
            </div>
          </form>
        </div>

        <div className="login-links">
          <p className="text-center">
            Already have an account?{" "}
            <a className="txt-brand" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
