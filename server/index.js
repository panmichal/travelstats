import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './generated/app';
import handlebars from 'express-handlebars';
const path = require('path');

const app = express();
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('/', (request, response) => {
  response.render('app', {
    app: ReactDOMServer.renderToString(<App />)
  });
});


app.listen(3000, () => console.log('Server running'));
