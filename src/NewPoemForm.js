import React from 'react';

class NewPoemForm extends React.Component {
  state = {
    title: '',
    content: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onCreatePoem(this.state)
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleContentChange = (event) => {
    this.setState({ content: event.target.value })
  }
  render(){
    return (
      <div className="new-poem">
      {
        this.props.username ?

        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input value={this.state.title} onChange={this.handleTitleChange} placeholder="Name your masterpiece..." />
          <textarea value={this.state.content} onChange={this.handleContentChange} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form> :

        'PLEASE LOG IN TO ADD POEMS!'
      }
      </div>
    );
  }
}

export default NewPoemForm;
