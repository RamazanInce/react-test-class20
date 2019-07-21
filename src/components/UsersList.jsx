import React from 'react';

import UsersListContent from './UsersListContent';

const UsersList = ({ users, changeDisplayedUsers }) => {
  return (
    <React.Fragment>
      <div className="">
        {users.length > 0
          ? users.map((user, i) => {
              return (
                <UsersListContent key={i} user={user} changeDisplayedUsers={changeDisplayedUsers} />
              );
            })
          : ''}
      </div>
    </React.Fragment>
  );
};

export default UsersList;
