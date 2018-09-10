'use strict';

const express = require('express');
var Cors		= require('cors');
const configs = require('./backend/Configs/configs');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());
app.use('/frontend', express.static('frontend'));



app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.listen(configs.port, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port '+configs.port);
});