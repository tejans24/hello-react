import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import rootReducer from './reducers';

// handlers
import App from './handlers/app';
import Dashboard from './handlers/dashboard';
import Other from './handlers/other';

import Router from 'react-router';
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

const store = createStore(rootReducer);

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name="other" path="/other" handler={Other}/>
  </Route>
)

Router.run(routes, function(Handler) {
  React.render(
    <Provider store={store}>
      {() => <Handler />}
    </Provider>,
  document.body);
});
