'use strict';

const express = require('express');
var Cors		= require('cors');
const cors = require('cors');

var port = 3000;


const app = express();

app.use(cors());
app.use(express.json());
app.use('/frontend', express.static('frontend'));






app.get('/', function(req, res) {
    res.sendFile(__dirname+'/frontend/home.html');
});



app.listen(port, function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port '+port);
});