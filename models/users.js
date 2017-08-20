'use strict';

var Bookshelf = require('./database');

var User = Bookshelf.Model.extend({
    tableName: 'users',
    hasTimeStamps: true
});

module.exports = Bookshelf.model('User', User);