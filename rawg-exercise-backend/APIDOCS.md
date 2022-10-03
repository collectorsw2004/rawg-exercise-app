## Modules

<dl>
<dt><a href="#module_controllers/health">controllers/health</a></dt>
<dd></dd>
<dt><a href="#module_controllers/videogames">controllers/videogames</a></dt>
<dd></dd>
<dt><a href="#module_middlewares/cache">middlewares/cache</a></dt>
<dd></dd>
<dt><a href="#module_middlewares/error">middlewares/error</a></dt>
<dd></dd>
<dt><a href="#module_services/games">services/games</a></dt>
<dd></dd>
</dl>

<a name="module_controllers/health"></a>

## controllers/health
<a name="module_controllers/health..health"></a>

### controllers/health~health(request, response)
Returns current health status

**Kind**: inner method of [<code>controllers/health</code>](#module_controllers/health)  

| Param |
| --- |
| request | 
| response | 

<a name="module_controllers/videogames"></a>

## controllers/videogames
<a name="module_controllers/videogames..getAllByTitle"></a>

### controllers/videogames~getAllByTitle(request, response, next)
Calls a service to search games by title and sends the response

**Kind**: inner method of [<code>controllers/videogames</code>](#module_controllers/videogames)  

| Param |
| --- |
| request | 
| response | 
| next | 

<a name="module_middlewares/cache"></a>

## middlewares/cache
<a name="exp_module_middlewares/cache--module.exports"></a>

### module.exports() ⏏
Verifies if query is already cached and return its value as response;
 otherwise, caches query along with response data
 @

**Kind**: Exported function  
<a name="module_middlewares/error"></a>

## middlewares/error

* [middlewares/error](#module_middlewares/error)
    * [~buildJSONError(code)](#module_middlewares/error..buildJSONError) ⇒ <code>Object</code>
    * [~errorLogger(err, request, response, next)](#module_middlewares/error..errorLogger)
    * [~errorResponder(err, request, response, next)](#module_middlewares/error..errorResponder)
    * [~invalidPathHandler(request, response)](#module_middlewares/error..invalidPathHandler)

<a name="module_middlewares/error..buildJSONError"></a>

### middlewares/error~buildJSONError(code) ⇒ <code>Object</code>
Builds custom error object

**Kind**: inner method of [<code>middlewares/error</code>](#module_middlewares/error)  
**Returns**: <code>Object</code> - - custom error message  

| Param | Description |
| --- | --- |
| code | error code |

<a name="module_middlewares/error..errorLogger"></a>

### middlewares/error~errorLogger(err, request, response, next)
Error console logger

**Kind**: inner method of [<code>middlewares/error</code>](#module_middlewares/error)  

| Param |
| --- |
| err | 
| request | 
| response | 
| next | 

<a name="module_middlewares/error..errorResponder"></a>

### middlewares/error~errorResponder(err, request, response, next)
Basic error handler returning custom messages

**Kind**: inner method of [<code>middlewares/error</code>](#module_middlewares/error)  

| Param |
| --- |
| err | 
| request | 
| response | 
| next | 

<a name="module_middlewares/error..invalidPathHandler"></a>

### middlewares/error~invalidPathHandler(request, response)
Handles invalid paths requests

**Kind**: inner method of [<code>middlewares/error</code>](#module_middlewares/error)  

| Param |
| --- |
| request | 
| response | 

<a name="module_services/games"></a>

## services/games

* [services/games](#module_services/games)
    * [~resultsMapping(results)](#module_services/games..resultsMapping) ⇒ <code>Array.&lt;object&gt;</code>
    * [~findAllByTitle(query)](#module_services/games..findAllByTitle) ⇒ <code>Promise.&lt;Array&gt;</code>

<a name="module_services/games..resultsMapping"></a>

### services/games~resultsMapping(results) ⇒ <code>Array.&lt;object&gt;</code>
Parses results to useful structure

**Kind**: inner method of [<code>services/games</code>](#module_services/games)  
**Returns**: <code>Array.&lt;object&gt;</code> - The data from the URL.  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>Array</code> | Raw external API results |

<a name="module_services/games..findAllByTitle"></a>

### services/games~findAllByTitle(query) ⇒ <code>Promise.&lt;Array&gt;</code>
Returns a list of games by calling RAWG API

**Kind**: inner method of [<code>services/games</code>](#module_services/games)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - Parsed RAWG promise results  

| Param | Type |
| --- | --- |
| query | <code>String</code> | 

