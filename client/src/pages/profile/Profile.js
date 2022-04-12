import axios from "axios";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/store";
import "./profile.css";

function Profile() {
  const { user, dispatch } = useContext(StoreContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    try {
      const res = await axios.put("/profile/" + user._id, updatedUser, {
        headers: {
          "x-access-token": user.accessToken,
        },
      });
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
    console.log(user._id);
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-name">
          <h1>Edit Profile</h1>
          <i className="fa fa-user ti-user"></i>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder={user.username}
          />
        </div>
        <div className="profile-email">
          <i className="fa fa-envelope ti-email"></i>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder={user.email}
          />
        </div>
        <div className="profile-password">
          <i className="fa fa-lock ti-unlock"></i>
          <input
            type="password"
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="profile-button" type="submit">
          Update
        </button>
        {success && (
          <span
            style={{ color: "green", textAlign: "center", marginTop: "20px" }}
          >
            Profile has been Updated!
          </span>
        )}
      </form>
    </div>
  );
}

export default Profile;
