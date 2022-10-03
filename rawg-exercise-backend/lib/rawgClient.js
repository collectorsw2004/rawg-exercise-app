/**
 @module lib/rawgClient
*/

var axios = require("axios");


/**
 * Wrapper of Axios get method for Rawg API
 * @param {String} endpoint - endpoint URI
 * @param {Object} params - query params
 * @return {Promise<AxiosResponse>} -Axios response
 */

function get (endpoint, params) {
    params.key = process.env.RAWG_API_KEY;
    const url = process.env.RAWG_API_URL + endpoint;
    return axios.get(url, {params});
}


module.exports = {
    get
}