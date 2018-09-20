import React, { Component } from 'react';
import Header from './Header.js';
import List from './List.js';

class App extends Component {
  render() {
    const {
      number,
      text,
      boolean,
      object,
      array
    } = this.props;

    return (
      <div className="App">
        <Header hasImage={boolean}/>

        {text && typeof text === 'string' &&(
          <h2 className="App-intro">
            {text}
          </h2>
        )}

        <p className="number">{number}</p>

        {array ?
          (<List listItems={array}/>) :
          (<p className="no-list-warning">Não há uma lista</p>)
        }

        {object && (
          <div className="object-div">
            {object.title && <h2>{object.title}</h2>}
            {object.content && <p>{object.content}</p>}
          </div>
        )}
      </div>
    );
  }
}

export default App;
