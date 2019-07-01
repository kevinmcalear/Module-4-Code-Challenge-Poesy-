import React from 'react';

class UserHeader extends React.Component {
  handleClick = () => {
    this.props.onLogout()
  }
  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.username}!</h3>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}

export default UserHeader;
