import React from 'react';
import App from './app';
import Dashboard from './handlers/dashboard';
import Other from './handlers/other';

import Router from 'react-router';
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name="other" path="/other" handler={Other}/>
  </Route>
)

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});
