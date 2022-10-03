/**
 @module controllers/health
*/


/**
 * Returns current health status
 * @param request
 * @param response
 */

const health = (request,response) => {

    const status = {
        status: 'server is UP!',
        code : 200,
        date: `${Date()}`
    }
    response.json(status)
};

module.exports = {health};
