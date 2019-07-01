import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  render(){
    const poems = this.props.poems.map(poem => <Poem onFavoriteSelected={this.props.onFavoriteSelected} key={poem.id} poem={poem} />)
    return (
      <div className="poems-container">
        {
          poems
         /* render poems here*/
        }
      </div>
    );
  }
}

export default PoemsContainer;
