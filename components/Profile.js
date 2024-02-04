import React from 'react';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <div className="profile-avatar">
          {/* Display user avatar here */}
          <img src="user-avatar.jpg" alt="User Avatar" />
        </div>
        <div className="profile-details">
          <h3>User Details</h3>
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Username: johndoe123</p>
        </div>
      </div>
      <div className="profile-actions">
        <button className="btn">Edit Profile</button>
        <button className="btn btn-danger">Delete Account</button>
      </div>
    </div>
  );
};

export default Profile;
