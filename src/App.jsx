import React from 'react';
import SearchButton from './components/SearchButton';
import UserContainer from './components/UserContainer';
import UsersList from './components/UsersList';
import './App.css';

/**
 * Endpoint for the usernames
 */
const USERS_URL = 'http://uinames.com/api/?ext&amount=5';

class App extends React.Component {
  state = {
    users: [],
    displayedUser: '',
    searchQuery: '',
  };

  fetchUsers = event => {
    event.preventDefault();
    fetch(USERS_URL)
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
    // .catch(error => console.error(error));
  };

  changeDisplayedUsers = user => {
    this.setState({ displayedUser: user });
  };

  render() {
    return (
      <React.Fragment>
        <div className="">
          <SearchButton search={this.fetchUsers} />
        </div>
        <div className="photoInfoContainer">
          <div className="">
            <UserContainer user={this.state.displayedUser} />
          </div>
          <div className="usersList">
            <UsersList users={this.state.users} changeDisplayedUsers={this.changeDisplayedUsers} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
