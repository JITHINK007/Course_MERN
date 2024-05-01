// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://jithin:jithin@course.o79krkm.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define a schema for the form data
const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    gender: String,
    country: String
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// POST route handler
app.post('/submit-form', (req, res) => {
    // Extract form data from the request body
    const formData = req.body;

    // Create a new FormData document
    const newFormData = new FormData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,
        country: formData.country
    });

    // Save the document to the database
    newFormData.save()
        .then(() => {
            console.log('Form data saved to MongoDB');
            res.send('Form data saved successfully!');
        })
        .catch((err) => {
            console.error('Error saving form data to MongoDB:', err);
            res.status(500).send('Error saving form data to MongoDB');
        });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
