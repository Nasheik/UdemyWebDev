const mongoose = require('mongoose');
const cities = require('./cities.txt');
const {places, descriptors} = require('./seedhelpers.txt');
const Campground = require("../Models/campground");

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

const sample = array => array[Math.floor(Math.random()*array.length)]

const seedDB = async ()=>
{
    await Campground.deleteMany({});
    for(let i = 0; i<300; i++)
    {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random()*20)+10;
        const camp = new Campground({
            author: "669a8f51bd4f3691148a50ab",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem IpsummLorem Ipsumm",
            price,
            geometry: {
                type: 'Point',
                coordinates: [ cities[random1000].longitude, cities[random1000].latitude ]
            },
            images: [
                {
                    url: "https://res.cloudinary.com/dbcowtjst/image/upload/v1721612273/YelpCamp/tmi0bpyo51ecqxkfowz5.png",
                    filename : "YelpCamp/byqvb7wgkizemni0o0ne"
                },
                {
                    url: "https://res.cloudinary.com/dbcowtjst/image/upload/v1721612273/YelpCamp/px7ns7hdeeoomus9p7rp.png",
                    filename : "YelpCamp/wsayycc4zredoawoduny"
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(_=>mongoose.connection.close());
