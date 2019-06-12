import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm />
          <UserHeader />
          <NewPoemForm />
        </div>
        <PoemsContainer/>
      </div>
    ); 
  }
}

export default App;
