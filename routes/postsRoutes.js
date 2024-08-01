const express = require("express");

const fs = require("fs/promises");

const validatePostData = require("../middlewares/validateData");

const router = express.Router();

async function readData() {
    try {
        const data = await fs.readFile("./database/posts.json");
        return JSON.parse(data);
    } catch (error) {
        throw error;
    }
}

router.get("/", async (req, res, next) => {
    try {
        const data = await readData();

        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
});

router.get("/post/:id", async (req, res, next) => {
    try {
        const postId = req.params.id;

        const data = await readData();

        const post = data.find((post) => post.id == postId);

        if (!post) {
            res.status(404).json({error: "Post not found"});
        } else {
            res.status(200).send(post);
        }
    } catch (error) {
        console.error(error.message);
    }
});

// CREATE POST
router.post("/", validatePostData, async (req, res, next) => {
    try {
      // Generate a unique ID for the new post
      const newPost = {
        id: Date.now().toString(),
        username: req.body.username,
        postTitle: req.body.postTitle,
        postContent: req.body.postContent,
      };
  
      // Read the existing data
      const data = await readData();
  
      // Add the new post to the data
      data.push(newPost);
  
      // Write the updated data back to the JSON file
      await fs.writeFile("./database/posts.json", JSON.stringify(data));
  
      // Send a success response with the new post
      res.status(201).json(newPost);
    } catch (error) {
      // Handle errors by logging them to the console
      console.error(error.message);
    }
  });