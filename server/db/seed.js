const db = connect("mongodb://localhost:27017/postsDB")
db.posts.drop();

//Sample Test Posts
db.posts.insertMany([
    {
        post_id : 1,
        title: "Hello World, I am Polly.",
        name: "Polly",
        content: "I love sleeping!"
    },
    {
        post_id: 2,
        title: "Hello World, I am Miz",
        name: "Miz",
        content: "I also love sleeping!"
    },
    {
        post_id: 3,
        title: "Hello World, I am Tom",
        name: "Tom",
        content: "I love Christmas"
    },
    {
        post_id: 4,
        title: "Hello World, I am Claire",
        name: "Claire",
        content: "I also love Christmas!"
    }
]);