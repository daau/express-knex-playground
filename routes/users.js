var express = require('express');
var router = express.Router();
var User = require(__dirname + '/../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.where({email: 'first@first.com'}).fetch()
    .then(function(user){
      console.log(user.toJSON());
      res.render('index', {
        users: JSON.stringify(user.toJSON())
      });
    })
    .catch(function(error){
      res.send('ERROR!');
    });
});

module.exports = router;
