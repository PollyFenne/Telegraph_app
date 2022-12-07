const express = require('express');
const Post = require('../models/post')

// all posts route
async function allPosts(req, res) {
    try {
        const posts = await Post.all
        res.status(200).json({posts})
    } catch(err) {
        res.status(500).json({err})
    }
}

// create post route
async function createPost(req,res) {
    try {
        const post = await Post.create(req.body.title, req.body.name, req.body.content)
        res.status(201).json(post)
    } catch (err) {
        res.status(404).json({err})
    }
}
// post show route
async function postById(req,res) {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }   catch(err) {
        res.status(404).json({err}) // why is this an obj?
    }
}

module.exports = {allPosts, createPost ,postById};
