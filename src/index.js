const express = require('express');

const { healthcheck } = require('./healthcheck.js');
const { root } = require('./root.js');
const { homeConfig } = require('./config.js');

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/healtcheck', healthcheck());
app.use('/', root(homeConfig));

app.listen(PORT, () => {
  console.log(`Express running at port ${PORT}...`);
});
