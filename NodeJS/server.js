// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// GET route handler
app.get('/submit-form', (req, res) => {
    // Extract query parameters from the request
    const queryParams = req.query;

    // Display query parameters in the console
    console.log(queryParams);

    // Send a response to the client
    res.send(queryParams);
});


// POST route handler
app.post('/submit-form', (req, res) => {
    // Extract form data from the request body
    const formData = req.body;

    // Display form data in the console
    console.log(formData);

    // Send a response to the client
    res.send(formData);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
