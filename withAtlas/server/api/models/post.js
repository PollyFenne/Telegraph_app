const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

// let timestamp = new Date().toLocaleDateString()
console.log("New Post Update")


class Post {
  constructor(data) {
    this.title = data.title, 
    this.name = data.name,
    this.content = data.content
  
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init()
        const postData = await db.collection('posts').find().toArray() // converts db data to array
        const posts = postData.map(p => new Post({...p, id: p._id})) // turns array back into Post objects
        resolve(posts)
      } catch (err) {
        console.log(err);
        reject("Error retrieving posts")
      }
    });
  }




  static create(title,name,content) {
    return new Promise(async (resolve, reject) => {
      try {

        const db = await init();
        const sortedPosts = await db
          .collection("posts")
          .find()
          .sort({
            post_id: -1,
          })
          .toArray();

        const newId = sortedPosts.length ? sortedPosts[0].post_id + 1 : 1;
        let newPost = {
          post_id: newId,
          title: title,
          name: name,
          content: content,
        };

        await db.collection("posts").insertOne(newPost);

        resolve(newPost);
      } catch (err) {
        reject(err);
      }
    });
  }



static findById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) throw new Error("No post id is specified.");

      const db = await init();
      const postsData = await db
        .collection("posts")
        .find({
          post_id: parseInt(id),
        })
        .toArray();

      if (!postsData.length) throw new Error("Post not found.");

      const post = new Post(postsData[0]);
      resolve(post);
    } catch (err) {
      reject(err);
    }
  });
}
};




module.exports = Post;
