const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();

const PORT = process.env.PORT || 5000;

// Use the cors middleware
app.use(cors());

app.use(express.json());

app.post('/api/data', (req, res) => {
    const json = req.body;
    res.status(200).json({message: 'JSON data received', data: json});
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});
