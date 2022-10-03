# RAWG EXERCISE APP


Welcome to RAWG EXERCISE APP! 

A small development to obtain useful information of all
your favorite videogames. Created with NodeJS and
Express framework.
Using Angular for web app.

### <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-start-call-to-action-bearicons-outline-color-bearicons.png"/>......Let's start!!

## EASIER WITH DOCKER


This project uses .ENV files  to load environment variables.

With Docker, you can have everything running in few steps:

First, download and install Docker version for your OS. 
You can find Docker setup instructions [HERE](https://docs.docker.com/engine/install/)

**NOTE**: you must enable Virtualization Technology in order to start Docker daemon.

Once Docker is running, open your terminal, go to project root path and run `docker compose up` command. This will create and start containers for both BACKEND and WEB APP.

Containers run `node:16` image.

After this, you should have whole project running on:

[http://localhost:9000](http://localhost:8000) -- BACKEND

[http://localhost:4200](http://localhost:4200) -- FRONTEND

File named`docker-compose.yml` and `Dockerfile` files need to be updated if you want
to change default running ports. 


## NO DOCKER?

Running backend and frontend services manually require some more steps.

Don't worry! You can guide yourself reading:


- BACKEND -- [README](rawg-exercise-backend/README.md)
- WEB App -- [README](rawg-exercise/README.md)

