"use strict";

const express = require('express');

const bus = require('../lib/bus');
var msgbus = require('../msgbus');
var colors = require('../colors');

const _ = require('underscore');

var router = express.Router();

router.get('/', function (req, res) {
  res.end('ok');
});

router.get('/test', function (req, res) {
    /*
    bus.send('user', {
        type: "user"
    });

    bus.publish('product.updated', {
        type: "test"
    });
    */

    var data = { id:_.uniqueId('msg'),
        command: 'createItem',
        payload: {
            text: "Test Create from POST"
        }
    };
    console.log(colors.magenta('\n -- sends command ' + data.command + ':'));
    console.log(data);

    msgbus.emitCommand(data);


    res.end('test user ok');
});

module.exports = router;

