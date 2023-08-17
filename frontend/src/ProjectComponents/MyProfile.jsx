import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getLoginInfo } from "../utils/loginInfo";

const MyProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  let params = useParams();
  let navigate = useNavigate();

  let readData = async () => {
    try {
      let response = await axios({
        url: "http://localhost:3001/users/my-profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${getLoginInfo()?.token}`,
        },
      });

      const { result } = response.data;
      const { fName, lName, dob, profileImage, role, email } = result;

      setFirstName(fName);
      setLastName(lName);
      setDateOfBirth(new Date(dob).toLocaleDateString());
      setRole(role);
      setEmail(email)
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    readData();
  }, [params.id]);

  return (
    <div className="profile-container">
      <h2 className="profile-title">My Profile</h2>
      <div className="profile-section">
        <label className="profile-label">First Name:</label>
        <p className="profile-info">{firstName}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Last Name:</label>
        <p className="profile-info">{lastName}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Date of Birth:</label>
        <p className="profile-info">{dateOfBirth}</p>
      </div>
      <div className="profile-section">
        <label className="profile-label">Email:</label>
        <p className="profile-info">{email}</p>
       
      </div>
     
      <div className="profile-section">
        <label className="profile-label">Role:</label>
        <p className="profile-info">{role}</p>
      </div>
      <button
        className="profile-button"
        onClick={(e) => {
          navigate("/update-my-profile");
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default MyProfile;
