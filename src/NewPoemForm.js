import React from 'react';

class NewPoemForm extends React.Component {
  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form">
          <input placeholder="Name your masterpiece..." />
          <textarea placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;