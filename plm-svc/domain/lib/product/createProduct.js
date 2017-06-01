/**
 * Created by jo52 on 30/05/17.
 */
module.exports = require('cqrs-domain').defineCommand({
    name: 'createProduct'
}, function (data, aggregate) {
    aggregate.apply('productCreated', data);
});