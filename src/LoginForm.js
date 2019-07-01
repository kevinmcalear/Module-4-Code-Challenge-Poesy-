import React from 'react';

class LoginForm extends React.Component {
  state = {
    username: ''
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin(this.state.username)
  }
  render(){
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <input value={this.state.username} onChange={this.handleChange} placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
