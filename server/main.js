const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const dist = '../dist/ravn-code-challenge';

app.use('/', express.static(`${__dirname}/${dist}`));

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, `/${dist}/index.html`));
});

app.listen(port);
