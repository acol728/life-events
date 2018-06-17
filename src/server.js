/* eslint no-console: "off" */
import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';

import { helpers } from './js/helpers';

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers,
  layoutsDir: 'src/views/layouts',
  partialsDir: [
    'src/shared/templates/',
    'src/views/partials/'
  ]
});
console.log(path.join(`${__dirname}/../dist`));
app.use('/dist', express.static(path.join(`${__dirname}/../dist`)));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.set('layouts', path.join(__dirname, 'layouts'));

app.get('/', (req, res) => {
  const { id } = req.params;
  res.render('home', {
    title: `${id}`
  });
});

app.listen(3000, () => {
  console.log('express-handlebars example server listening on: 3000');
});
