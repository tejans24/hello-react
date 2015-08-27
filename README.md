# Hello React

> Are you interested in ES6 and React, Facebook's library for building user interfaces? Are you confused by babel and browserify, or just don't have the time to invest in setting up a Gulp build pipeline?

Hello React is an application skeleton that provides developers with the tools necessary to get started with ES6 and Facebook's React library quickly and painlessly.

We put together this framework because we are starting to build single-page applications that require knowledge of other parts of the app. Backbone requires a lot of wiring code, has an event system can get out of hand, and, most importantly, can become slow due to it having to re-render entire views when the application state changes. Angular is great for data-heavy RESTful applications, but its uses as a UI framework leave plenty to be desired.

### How do I use this skeleton?

1. Clone this repository

        git clone https://github.com/GSA/hello-react

2. Enter the directory and install the dependencies.

        cd hello-react && npm install

3. Run the application using gulp

        NODE_ENV=production gulp serve

### Requirements

* iojs-3.0.0 (we use [nvm](https://github.com/creationix/nvm))
* gulp-cli (`npm -g install gulp-cli`)
