import React from 'react';

const UserContainer = ({ user }) => {
  if (!user) {
    return <div>No user to show yet...</div>;
  }
  return (
    <React.Fragment>
      <div className="">
        <img src={user.photo} alt="for the user" />
        <div className="userContainer">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.age}</p>
          <p>Country of Origin: {user.region}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UserContainer;
