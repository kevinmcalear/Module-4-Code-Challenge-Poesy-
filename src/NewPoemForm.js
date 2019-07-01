import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title: '',
    content: ''
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleContentChange = (event) => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onNewPoem(this.state)
    this.setState({ title: '', content: '' })
  }

  render(){
    return (
      <div className="new-poem">
        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input onChange={this.handleTitleChange} value={this.state.title} placeholder="Name your masterpiece..." />
          <textarea onChange={this.handleContentChange} value={this.state.content} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    );
  }
}

export default NewPoemForm;
