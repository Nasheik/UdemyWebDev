const express = require('express');
const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.get('/', (req,res)=> {
    // res.send('Hello From Yelp Camp!')
    res.render('home')
})

app.listen(3000,  ()=>{
    console.log('Serving on port 3000')
})