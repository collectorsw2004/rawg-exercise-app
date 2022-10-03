/**
 @module middlewares/error
 */

const CUSTOM_MSG = {
    400: 'Forgot to send something...?',
    404: 'Nothing here!! Try another endpoint',
    500: 'OPPS...Something went wrong! Internal server error'
}

/**
 * Builds custom error object
 * @param code -error code
 * @returns {{code, message: *}} - custom error message
 */


const buildJSONError = (code) => ({
    'code':code,
    'message':CUSTOM_MSG[code]
})

/**
 * Error console logger
 * @param err
 * @param request
 * @param response
 * @param next
 */

const errorLogger = (err, request, response, next) => {
    console.error('\x1b[31m', err) // adding some color to our logs
    next(err) // calling next middleware
}

/**
 * Basic error handler returning custom messages
 * @param err
 * @param request
 * @param response
 * @param next
 */

const errorResponder = (err, request, response,next) => {
    if (err==400)
        response.status(err).json({'error':buildJSONError(err)});
    else
        response.status(500).json({'error':buildJSONError(500)});
}

/**
 * Handles invalid paths requests
 * @param request
 * @param response
 */

const invalidPathHandler = (request, response) => {
    response.status(404).json({'error':buildJSONError(404)})
}
module.exports = {errorLogger, errorResponder,invalidPathHandler}
