const db = connect("mongodb://localhost:27017/postsDatabase")
db.posts.drop()

// Sample Posts
db.posts.insertMany([
    {
      post_id: 1,
      title: "Hello Canada!",
      name: "Mizna",
      content:
        "I love Maple Syrup!",
    },
    {
      post_id: 2,
      title: "Hello France!",
      name: "Polly",
      content:
        "I love Pastries!",
    },
    {
      post_id: 3,
      title: "Hello Germany!",
      name: "Tom",
      content:
        "I love Christmas",
    },
    {
      post_id: 4,
      title: "Hello Brazil!",
      name: "Claire",
      content:
        "I love the Beach",
    },
  ]);
