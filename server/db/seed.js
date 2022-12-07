const db = connect("mongodb://localhost:27017/postsDatabase")
db.posts.drop()

// Sample Posts
db.posts.insertMany([
    {
      post_id: 1,
      title: "Hello World, I am Polly.",
      name: "Polly",
      content:
        "I love sleeping!",
    },
    {
      post_id: 2,
      title: "Hello Chicago!",
      name: "Mizna",
      content:
        "I love sleeping!!",
    },
    {
      post_id: 3,
      title: "Hello Christmas!",
      name: "Tom",
      content:
        "Something something!",
    },
  ]);
