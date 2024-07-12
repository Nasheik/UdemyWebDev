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

app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=> {
    // res.send('Hello From Yelp Camp!')
    res.render('home')
})

// app.get('/makecampground', async (req,res)=> {
//     const camp = new Campground({title: 'My Backyard', description: "Cheap Camping"});
//     await camp.save();
//     res.send(camp)
// })

app.get("/campgrounds", async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('Campgrounds/index', {campgrounds})
})

app.get("/campgrounds/new", (req,res) => {
    res.render("campgrounds/new")
})
app.post("/campgrounds", async(req,res)=>{
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
})

app.get("/campgrounds/:id", async(req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render("campgrounds/show", {campground})
})

app.listen(3000,  ()=>{
    console.log('Serving on port 3000')
})