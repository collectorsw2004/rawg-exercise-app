/**
 @module middlewares/cache
 */


const NodeCache = require("node-cache");
const cache = new NodeCache();

/**
 Verifies if query is already cached and return its value as response;
 otherwise, caches query along with response data
 @
 */


module.exports = setTTL => (request, response, next) => {
    if (request.method !== "GET") {         // only caches GET requests
        return next();
    }
    const key = request.query.search
    if (!key)
        return next()
    const cachedResponse = cache.get(key);
    if (cachedResponse) {
        console.log(`Cache hit for ${key}`);
        response.setHeader('Content-Type', 'application/json')
        response.send(cachedResponse);
    } else {
        console.log(`Cache miss for ${key}`);
        response.originalSend = response.send;
        response.send = data => {
            response.originalSend(data);
            cache.set(key, data, setTTL);
        };
        next();
    }
};
