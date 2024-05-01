// NodeJS & MongoDB
const express = require('express');
const bodyParser = require('body-parser');
const  mongoose = require('mongoose');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const mongoURL = "mongodb+srv://jithin:jithin@cluster0.6chwxfg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURL)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


    const formDataSchema = new mongoose.Schema(
        {
            name: String,
            email: String,
            phone: String,
        }
    );

    const FormData = mongoose.model('FormData', formDataSchema);


app.post('/server-post',(req, res)=>{
    var data = req.body;

    const newFormData = new FormData({
        name: data.name,
        email: data.email,
        phone: data.phone,
    });

    newFormData.save()
    .then(()=>{
        console.log("Data saved");
    })
    .catch((err)=>{
        console.log(err);
    });

    res.send(data);
});

app.get('/server-get',(req, res)=>{
    var data = req.query;
    console.log(data);
    res.send(data);
});


app.listen(4000,()=>{console.log("Running on port 4000")});