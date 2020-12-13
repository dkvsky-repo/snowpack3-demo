import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="container">
      <h1>Hola Snowpack!</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)