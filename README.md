#Lightweight Email Template

## Install

You will need both `bundle` and `npm` to run this demo application.

```
$ bundle install
$ npm install
```

## Setup 

This demo app uses `sinatra`, a ruby HTTP web server, to host a static `index.html` file. 

This file sources the redux email application found in `/src`. 

To run the demo, simply run: 

`$ ruby server.rb`

Once the server is running, you can interact with the template by visiting `http://localhost:4567` in your browser.

## Further Development 

The redux app found in `/src` is compiled (via webpack) into `build/bundle.js` (which is then sourced by the `index.html`).

You can use the command `$ npm start` to start a program that will watch for changes to `/src` and instantly compile them to `bundle.js`, as well as provide useful debugging tips for when your javascript files fail to properly parse.
