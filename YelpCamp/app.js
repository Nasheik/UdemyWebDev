const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require("./Models/campground");

mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open", ()=>{
    console.log("Database Connected")
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.get('/', (req,res)=> {
    // res.send('Hello From Yelp Camp!')
    res.render('home')
})

app.get('/makecampground', async (req,res)=> {
    const camp = new Campground({title: 'My Backyard', description: "Cheap Camping"});
    await camp.save();
    res.send(camp)
})

app.listen(3000,  ()=>{
    console.log('Serving on port 3000')
})