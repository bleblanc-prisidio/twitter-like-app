const express = require('express');

const app = express();

const router = require("../routes/postsRoutes");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", router);

BiAperture.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: "Internal Server Error"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});