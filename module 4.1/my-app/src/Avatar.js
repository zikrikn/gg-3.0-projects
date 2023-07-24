import React from 'react';
import './Avatar.css'; // Importing the CSS file

const Avatar = ({ user }) => {
  return (
    <div className="avatar-container">
      <h1 className="avatar-header">{user.name}</h1>
      <img className="avatar-image" src={user.avatarUrl} alt="User Avatar" />
    </div>
  );
};

export default Avatar;
