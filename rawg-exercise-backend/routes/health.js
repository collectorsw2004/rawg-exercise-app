var express = require('express');
const healthController = require("../src/controllers/health");
var router = express.Router();


router.get('/',  function (req, res) {

    return healthController.health(req,res)
});

module.exports = router;