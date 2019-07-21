import React from 'react';

const UsersListContent = ({ user, changeDisplayedUsers }) => {
  const { name } = user;
  return (
    <React.Fragment>
      <div className="" onClick={() => changeDisplayedUsers(user)}>
        <div className="">
          <div className="">{name}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UsersListContent;
