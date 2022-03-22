import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="login">
        <div className="login-page">
          <div className="login-block">
            <h1>Log into your account</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-user ti-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <hr className="hr-xs" />

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope ti-email"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your email address"
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="Choose a password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button className="btn btn-primary btn-block" type="submit">
                Sign up
              </button>
              <hr />
              {error && (
                <span style={{ color: " red", marginTop: "220px" }}>
                  Something went wrong
                </span>
              )}

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
    </div>
  );
}

export default Register;
