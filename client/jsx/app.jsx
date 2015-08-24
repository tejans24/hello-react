import React from 'react';
import Router from 'react-router';
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="other">Other</Link></li>
          </ul>
        </header>
        <RouteHandler />
      </div>
    )
  }
}

export default App;
