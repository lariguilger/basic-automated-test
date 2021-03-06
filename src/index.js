import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let testObject = {
  title:  "Placeholder title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
let testArray = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5"
]
ReactDOM.render(<App number={2} text="Bem vindo!" boolean={true} object={testObject} array={testArray} />, document.getElementById('root'));
registerServiceWorker();
