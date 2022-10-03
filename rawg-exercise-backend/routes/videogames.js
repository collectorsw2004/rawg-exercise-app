var express = require('express');
const videogamesController = require("../src/controllers/videogames");
const cache = require("../src/middlewares/cache")
var router = express.Router();


router.get('/', cache(300), async function (request, response, next) {
    return await videogamesController.getAllByTitle(request, response, next)
});

module.exports = router;
