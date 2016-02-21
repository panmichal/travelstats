# travelstats

Travelstats is a web app that aggregates information for travelers from different travel sites and forums (think Thorn Tree etc.)

## Tech stack

 - Express.js + React.js + Redux - client and API
 - Clojure - web scraper and indexer (soon)

## Running development mode

 Install global and local libs:
 
 `npm i -g babel`
 
 `npm i -g nodemon`
 
 `npm i`
 

 - Run webpack in dev mode for serving statics assets from the server: `babel-node webpack.development.js`
 - Run server in dev mode: `NODE_ENV=development nodemon --exec npm run babel-node -- index.js`
