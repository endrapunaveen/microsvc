/**
 * Created by jo52 on 30/05/17.
 */
module.exports = require('cqrs-domain').defineAggregate({
    // optional, default is last part of path name
    name: 'product',

    // optional, default ''
    defaultCommandPayload: 'payload',

    // optional, default ''
    defaultEventPayload: 'payload'
});