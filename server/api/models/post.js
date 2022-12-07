// Models file

const {initi} = require('../dbconfig');
const {objectId} = require('mongodb');
class Posts  {
    constructor(data){
        this.id = data.id,
        this.title = data.title,
        this.content = data.content
    }

    static get all(){
        return new Promise(async (resolve, reject) => {
            try{
                // const db = await initi();
                // const PostData = 
            }catch(err){
                
            }
        })
    }



}



static findById(id) {
    return new Promise(async (resolve, reject) => {
        try {

        }
        catch(error) {
            reject('Post not found')
        }
    })
}

static async createPost()