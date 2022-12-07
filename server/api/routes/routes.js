// Routes

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/posts")

// Show all the Posts
router.get('/', Controllers.allPosts)
// Show Posts by their Id
router.get('/:id', Controllers.postById)
// Create the Post
router.post('/', Controllers.createPost)


module.exports = router;