import React, { Component } from 'react';
import './App.css';
import img from './img-placeholder.png';
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
      <div id="App" className="app">
        <header className="app-header">
          {text && typeof text === 'string' &&(
            <h1 className="app-title">
              Automated tests
            </h1>
          )}
        </header>
        <main className="app-main">
          {text && (
            <h2 className="app-heading">
              {text}
            </h2>
          )}

          <div className="row-flex">
            {boolean && <img className="app-img" src={img} alt="placeholder"/> }
            {array ?
              (<List className="app-list" listItems={array}/>) :
              (<p className="no-list-warning">Não há uma lista</p>)
            }
          </div>

          {object && (
            <div className="object-div card">
              {object.title && <h2>{object.title}</h2>}
              {object.content && <p>{object.content}</p>}
            </div>
          )}
          {number && <h2 className="number">Tempo de produção: {number} dias</h2>}
        </main>
      </div>
    );
  }
}

export default App;
