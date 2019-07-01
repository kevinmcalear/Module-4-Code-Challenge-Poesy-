import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  render(){
    // ways to write arrow functions... yay???
    // (arg) => {}
    // (arg, ar2) => {}
    // arg => ()
    // arg =>
    // () =>
    // () => {}

    const poems = this.props.poems.map(poem => <Poem key={poem.id} onFavorited={this.props.onFavorited} poem={poem} />)
    return (
      <div className="poems-container">
        {
         /* render poems here*/
         poems
        }
      </div>
    );
  }
}

export default PoemsContainer;
