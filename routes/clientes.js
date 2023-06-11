var express = require('express');
var router = express.Router();
var clientesController = require('../controllers/clientController.js');


router.get('/', function(req, res, next) {
  res.send(clientesController.check());
});


router.post('/', function(req, res, next) {
 
  const cliente = clientesController.new(req.body);
  res.send(cliente);

});


router.get("/:id", function(req, res, next) {

  res.send(clientesController.search(req.params.id));

});


router.put("/:id", function(req, res, next) {

  res.send(clientesController.update(req.params.id , req.body));
  
});


router.delete("/:id", function(req, res, next) {

  res.send(clientesController.delete(req.params.id));
  
});

module.exports = router;