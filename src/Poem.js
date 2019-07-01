import React from 'react';

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = () => {
    this.setState({ read: !this.state.read })
  }
  handleFavortitedClick = () => {
    this.props.onFavorited(this.props.poem)
  }
  render(){
    let cssObj = { color: 'black' }
    if (this.state.read) {
      cssObj.color = 'rebeccapurple'
    }
    return (
      <div onClick={this.handleClick} style={cssObj}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- By {this.props.poem.author}</strong>
        <button onClick={this.handleFavortitedClick}>❤️</button>
      </div>
    );
  }
}

export default Poem;
