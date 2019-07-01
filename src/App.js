import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  state  = {
    poems: [],
    favorites: [],
    username: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/poems')
    .then(res => res.json())
    .then(poemsData => {
      this.setState({ poems: poemsData })
    })
  }

  handleLogin = (username) => {
    this.setState({username: username})
  }

  handleLogout = () => {
    this.setState({username: ''})
  }

  handleNewPoem = (poemData) => {
    const newPoem = {
      ...poemData,
      author: this.state.username
    }
    // const newArray = [...this.state.poems, newPoem]
    // newArray.push(newPoem)
    // newArray + [newPoem]
    fetch('http://localhost:3000/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Application: 'application/json'
      },
      body: JSON.stringify(newPoem)
    })
      .then(res => res.json())
      .then(finalNewPoem => {
        this.setState({ poems: [...this.state.poems, finalNewPoem] })
      })

  }

  handleFavorited = (poem) => {
    this.setState({ favorites: [...this.state.favorites, poem]})
  }

  render(){
    const login = this.state.username ? <UserHeader onLogout={this.handleLogout} username={this.state.username} /> : <LoginForm onLogin={this.handleLogin} />
    return (
      <div className="app">
        <div className="sidebar">
          { login }
          { this.state.username ? <NewPoemForm onNewPoem={this.handleNewPoem} /> : "Please login to add poems!" }
        </div>
        <PoemsContainer onFavorited={this.handleFavorited} poems={this.state.poems}/>
        <PoemsContainer poems={this.state.favorites}/>
      </div>
    );
  }
}

export default App;














  // if (this.state.username) {
  //   <UserHeader />
  // } else {
  //   <LoginForm />
  // }
  // this.state.username ?
  // <UserHeader /> :
  // <LoginForm />
  //
  // let response = ''
  // if(true) {
  //   response = "i'm true!"
  // } else {
  //   response = "i'm false!"
  // }
  //
  // response = true ? "i'm true!" : "i'm false!"
