# Telegraph app


## Installation

#This app uses MongoDB to store blog posts

![atlas logo](/atlast.png)

##To use the app:
- Data is not destroyed and stored on Mongo Atlas
- Navigate into withAtlas folder, into api 
- Run `npm install`
- Run `npm run dev`
- Navigate to index.html in client folder; view on live server or through file path on browser.

![local logo](/local.png)

##To use the app locally:
- Data is destroyed on server restart
- Clone from git hub
- Navigate to the server folder 
- Install the docker image by `npm install`
- Once the image has installed, run `docker-compose up` in your command line to start the server
- To stop and remove the server run the following commands:
    `docker-compose down --volumes --remove-orphans`
    `docker volumes prune --force`
