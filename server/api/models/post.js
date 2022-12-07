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
                //finding the id and add onto array
                const db = await initi();
                let postsData = await db.collection("posts").find({post_id : parseInt(id)}).toArray();
                //resolve by new post from first post
                const post = new Post(postsData[0]);
                resolve(post);
                //different errors to throw and why 
                if(!id) throw new Error("No Post Id");
                if(!postsData.length) throw new Error("Post not found");
            }
            catch(err) {
                console.log(err);
                reject(err)
            }
        })
    }
    
    static async createPost(title, name, content){
        return new Promise (async (resolve, reject) => {
            try {
                //create the sorted post version
                const db = await initi();
                const sortedP = await db.collections("posts").find().sort({post_id: -1}).toArray();
                const newPId = sortedP.length ? sortedP[0].post_id + 1 : 1;
                //structure
                let newPost = {
                    post_id : newPId,
                    title : title,
                    name: name,
                    content : content,
                };
                //await the insert (create post one at a time)
                await db.collection("posts").insertOne(newPost)
                resolve(newPost)

            }
            catch(err) {
                reject(err);
            }
        })
    }
}

module.exports = Post;