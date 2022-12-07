const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

let timestamp = new Date().toLocaleDateString()
console.log("timestamp",timestamp)
//.replaceAll("/","-")

class Post {
  constructor(data) {
    this.title = data.title, 
    this.name = data.name,
    this.content = data.content
    //this.post_id = `${timestamp}-${data.title}`
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

  // static create(title, name, content) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       // let post_id = `${timestamp}-${title}`
  //       // const newPostCreateId = new Post({title,name,content,post_id}) // turns array back into Post
  //       // const post = dogsData.find(d => d.id === id)
  //       const db = await init();
  //       let postData = await db.collection('posts').insertOne({ title, name, content })
  //       console.log('postData ***************************************************',postData)
  //       let newPost = new Post(postData.ops[0])
  //       resolve(newPost);
  //     } catch (err) {
  //       reject('Error creating post')
  //     }
  //   });
  // }



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


//   static findById(id) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const db = await init()
//         let postData = await db.collection('posts').find({ _id: ObjectId(id)}).toArray() // ObjectId???
//         let post = new Post({...postData[0], id: postData[0]._id}); // postData[0]???
//         resolve(post)
//       } catch (err) {
//         reject('Post not found')
//       }
//     });
//   }
// };

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
