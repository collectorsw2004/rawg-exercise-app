/**
 @module services/games
 */

const rawgClient = require('../../lib/rawgClient');

/**
 * Parses results to useful structure
 * @param {Array} results - Raw external API results
 * @return {Array<object>} The data from the URL.
 */

const resultsMapping = (results) =>
    results.map((game) => ({
        id:game.id,
        title: game.name,
        b_img: game.background_image,
        r_date: game.released
    }))

/**
 * Returns a list of games by calling RAWG API
 * @async
 * @param {String} query
 * @return {Promise<Array>} Parsed RAWG promise results
 */
const findAllByTitle = async (query) => {
    const endpoint = '/games';
    const params = {'search': query}
    const results = await rawgClient.get(endpoint,params);
    return resultsMapping(results.data.results);
};

module.exports = { findAllByTitle };