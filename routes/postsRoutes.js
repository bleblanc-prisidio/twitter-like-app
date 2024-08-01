// Import express
const express = require('express');
// Import fs and promises
const fs = require('fs/promises');
// Import validatePostData
const validatePostData = require("../middlewares/validateData");

const router = express.Router();

// Create a function to read the data from the database
async function readData() {
    try {
        const data = await readFile('/database/post.json');

        return JSON.parse(data);

    } catch (error) {
        throw(error);
    }
}

router.get("/", async (req, res, next) => {
    try {
        const data = await readData();

        res.status(200).send(data);
    } catch (error) {
        console.error(error.message);
    }
})