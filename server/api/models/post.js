// Models file

const {init} = require('../dbconfig');
const {objectId} = require('mongodb');
class Posts  {
    constructor(data){
        this.id = data.id
        this.title = data.title
    }

}


static get.all()

static findById()

static async createPost()