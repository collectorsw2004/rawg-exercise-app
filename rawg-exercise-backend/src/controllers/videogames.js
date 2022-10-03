/**
 @module controllers/videogames
 */
const gamesService = require("../services/videogames");

/**
 * Calls a service to search games by title and sends the response
 * @async
 * @param request
 * @param response
 * @param next
 */

const getAllByTitle = async (request, response, next) => {
    const {query} = request;
    if (query.search) {
        try {
            const result = await gamesService.findAllByTitle(query.search);
            response.json(result);
        } catch (error) {
            next(error);
        }
    } else
        next(400)
}

module.exports = {getAllByTitle}

