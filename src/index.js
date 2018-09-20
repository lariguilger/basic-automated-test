import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let testObject = {
  title:  "Placeholder title",
  content: "Placeholder content"
}
let testArray = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5"
]
ReactDOM.render(<App number={2} text="has text!" boolean={true} object={testObject} array={testArray} />, document.getElementById('root'));
registerServiceWorker();
