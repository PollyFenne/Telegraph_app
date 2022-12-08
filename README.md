# Telegraph app


## Installation

#This app uses MongoDB to store blog posts
#Base design [Telegraph](https://telegra.ph/)

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

## Requirements
- Your app should have a browser client allowing users to write a post with a title, a pseudonym and a body
- No login should be required to create a post or visit a post
- When a user hits 'publish', the post should be stored in a database and the client redirected to a show path
- The user should be able to access their post using that show path even after a server restart
- Edit and delete functionality is not required
