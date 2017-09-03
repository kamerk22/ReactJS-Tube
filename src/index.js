import React from 'react';
import ReactDOM from 'react-dom';
import Env from '../.env';
import SearchBar from './components/search_bar'

// Create a new component.
// Should produce some HTML.

const App = () => {
  return <div><SearchBar/></div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));