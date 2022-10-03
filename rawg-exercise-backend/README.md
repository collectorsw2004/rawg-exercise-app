[BACK](../README.md)
# RAWG APP BACKEND 

API developed using:

- **NodeJS v16**
- [Express](https://expressjs.com/)  framework for NodeJS.
- [Axios](https://axios-http.com/docs/intro) as HttpClient for NodeJS.
- **[RAWG API](https://rawg.io/apidocs)**  as external videogames database.

## How can I get the backend to start?

You're here because you aren't running Docker. 

First, if not already installed, you'll need to install NodeJS. You can find your installer [HERE](https://nodejs.org/es/download/).

Then, go to  *"/rawg-exercise-backend"* directory;  you'll need to run some ``NPM`` commands to get the backend running:


```
npm install
npm start
```
That's it! Backend should be running now.

By default, at http://localhost:9000

**NOTE:** For development environment, livereload is implemented with [nodemon](https://nodemon.io).
Run one of the following scripts, according to your OS:

```
npm run dev:windows //For Windows 
```


```
npm run dev:linux  //For Linux
```


```
npm run dev:osx  //For MacOS
```


## Endpoints 


### `/health`
Endpoint to check the health of the server instance. If API is
up and running, it sends following JSON body response:
```
STATUS CODE: 200
BODY:  {
         status: 'server is UP!',
         code : '200',
         date: TODAY
       }
```

### `/videogames?search=`
Shows all games with title matching your query. Use **query params** 
to make a search, as following:

`/videogames?search=diablo`

The query will return JSON response:
``` 
STATUS CODE: 200
BODY: 
[{
	"id": 29593,
	"title": "Diablo",
	"b_img": "https://media.rawg.io/media/games/923/923a5dd13b6e79dd23ab2d09934f0e8d.jpg",
	"r_date": "1996-12-31"
}, {
	"id": 261225,
	"title": "Diablo: Immortal",
	"b_img": "https://media.rawg.io/media/games/7fd/7fd73ef44936f8eec7732cfc299dff09.jpg",
	"r_date": "2022-06-02"
}, {
	"id": 663741,
	"title": "Polygon Fantasy: Diablo-like Action RPG",
	"b_img": "https://media.rawg.io/media/screenshots/5e6/5e683542a8897bba7b89eabf260e39e8.jpg",
	"r_date": "2021-07-23"
}, ....

]
```
## Performance is always relevant....

This API takes advantage of NPM module ``node-cache`` to help implementing **In-Memory Cache**, for internal caching. 
That means that if you perform the same query for a second time, response time will
be far shorter!

## API Docs

- [MD version](APIDOCS.md)
- HTML version: `/docs` folder

#### These API Docs were generated with  [JSDoc](https://jsdoc.app)

JSDoc is an API documentation generator for JavaScript.

To  markdown API Docs:
```
npm run generate:docs:md
```

To generate or update HTML API docs file:
```
npm run generate:docs:html
```