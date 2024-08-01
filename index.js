// Ordering the express library for us to implement and use. This is just importing it
const express = require('express');

// How do we use it?

// First we need to assign it to a variable

const app = express();

// How do we set up the server/port to listen on??

// Lets define a port to use

const PORT = process.env.PORT || 5000;

// Lets tell our app to run on this port

app.listen(PORT, (error) => {
   if (!error) {
    console.log(`App is listening on ${PORT}`);
   } else {
    console.log(`Error, Failed to listen on port ${PORT}`);
}
});

app.get('/', (req, res) => {
    res.status(200);
    res.send("welcome to the root");
})

app.get('/hello', (req, res) => {
    res.set('Content-Type, text/html');
    res.status(200).send("<h1> Hell GFG Learner! </h1>");
});