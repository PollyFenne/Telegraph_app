// Models file

const {initi} = require('../dbconfig');
const {objectId} = require('mongodb');
class Post  {
    constructor(data){
        this.id = data.id,
        this.title = data.title,
        this.content = data.content
    }

    static get all(){
        return new Promise(async (resolve, reject) => {
            try{
                const db = await initi();
                //putting all my post data into an array
                const postData = await db.collection('posts').find().toArray();
                //turning array into post objects that can be used
                const posts = postData.map(p => new Posts({...p, id: p._id}))
                //resolving by giving the array of post objects
                resolve(posts)
            }catch(err){
                console.log(err);
                reject("Error, I can't get posts.")
            }
        })
    }

    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = await initi();
                let postsData = await db.collection("posts").find({post_id : parseInt(id)}).toArray();
            
                const post = new Post(postsData[0]);
                resolve(post);

                if(!id) throw new Error("No Post Id");
                if(!postsData.length) throw new Error("Post not found");
            }
            catch(err) {
                console.log(err);
                reject(err)
            }
        })
    }
    
    static async createPost(){
        
    }
}

module.exports = Post;