import React from 'react';

class Poem extends React.Component {
  state = {
    read: false
  }
  handleClick = () =>  {
    this.setState({ read: !this.state.read })
  }
  handleAddFavorite = () => {
    this.props.onFavoriteSelected(this.props.poem)
  }
  render(){
    let color = "black"
    if (this.state.read) {
      color = "lightgrey"
    }
    return (
      <div onClick={this.handleClick} style={{color: color}}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- By {this.props.poem.author}</strong>
        <button onClick={this.handleAddFavorite}>Like</button>
      </div>
    );
  }
}

export default Poem;
