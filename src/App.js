import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  state = {
    poems: [],
    favoritePoems: [],
    username: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/poems')
      .then(res => res.json())
      .then((poemsData) => this.setState({poems: poemsData}))
  }

  handleLogin = (username) => {
    this.setState({ username: username })
  }

  handleLogout = () => {
    this.setState({ username: '' })
  }

  handleFavoriteSelected = (poem) => {
    this.setState({favoritePoems: [...this.state.favoritePoems, poem]})
  }

  handleCreatePoem = (poem) => {
    const newPoem = {
      ...poem,
      author: this.state.username
    }
    fetch('http://localhost:3000/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newPoem)
    })
    .then(res => res.json())
    .then(poem => {
      const updatedPoems = [ ...this.state.poems, poem ]
      this.setState({ poems: updatedPoems })
    })
  }
  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {
            this.state.username ?
            <UserHeader username={this.state.username} onLogout={this.handleLogout} /> :
            <LoginForm onLogin={this.handleLogin}/>
          }


          <NewPoemForm username={this.state.username} onCreatePoem={this.handleCreatePoem}/>
        </div>
        <PoemsContainer onFavoriteSelected={this.handleFavoriteSelected} poems={this.state.poems}/>
        <PoemsContainer poems={this.state.favoritePoems}/>
      </div>
    );
  }
}

export default App;
