'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const api = require('../api');
const app = express();

const indexPath = '../../static/index.html';

app.use('/api', api);

app.get('/*', (req, res) => fs.createReadStream(path.resolve(__dirname, indexPath)).pipe(res));

app.listen(process.env.PORT || 3000);

module.exports = app;
