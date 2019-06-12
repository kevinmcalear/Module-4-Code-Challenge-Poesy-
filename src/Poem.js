import React from 'react';

class Poem extends React.Component {
  render(){
    return (
      <div style={{color: "black"}}>
        <h3>Title</h3>
        <p>Content</p>
        <strong>- By Author</strong>
      </div>
    ); 
  }
}

export default Poem;
