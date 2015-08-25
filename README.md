# Hello React

> Are you interested in ES6 and Facebook's React, a library for building user interfaces? Are you confused by babel and browserify, and don't know how to get started? This project is here to help get you started in the right direction.

Hello React is an application skeleton that provides the tools necessary to get started with ES6 and Facebook's React library quickly and painlessly. We put together this framework because we are starting to build single-page applications that require knowledge of other parts of the app. Backbone requires a lot of wiring code, has an event system can get out of hand, and, most importantly, can become slow due to it having to re-render entire views when the application state changes. Angular's syntax makes our eyes bleed.

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
