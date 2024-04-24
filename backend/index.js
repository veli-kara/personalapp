// importing express framework
const express = require('express');

var app = express()

var cors = require('cors');

var dynamoDB = require('./dynamoDB')

app.use(cors())

var port = process.env.PORT || 3000;

app.listen(port);


