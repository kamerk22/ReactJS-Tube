import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.
// Should produce some HTML.

const App = () => {
  return <div>Hello World</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));