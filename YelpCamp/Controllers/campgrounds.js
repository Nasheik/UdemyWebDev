const Campground = require("../Models/campground");
const {cloudinary} = require("../Cloudinary");

const maptilerClient = require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;

module.exports.index = async(req, res) => {
    const campgrounds = await Campground.find({});
    res.render('Campgrounds/index', {campgrounds})
}

module.exports.renderNewForm = (req,res) => {
    res.render("Campgrounds/new")
}

module.exports.createCampground = async(req,res,next)=>{
    const geoData = await maptilerClient.geocoding.forward(req.body.campground.location, { limit: 1 });
    const campground = new Campground(req.body.campground);
    campground.geometry = geoData.features[0].geometry;
    campground.images = req.files.map(f=>({url: f.path, filename: f.filename}));
    campground.author = req.user._id;
    await campground.save();
    req.flash('success', 'Successfully made a new campground');
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.showCampground = async(req, res) => {
    const campground = await Campground.findById(req.params.id).populate({
        path:'reviews',
        populate:{
            path:'author'
        }
    }).populate('author');
    console.log(campground);
    if(!campground)
    {
        req.flash('error', "Can't find campground");
        return res.redirect('/campgrounds');
    }
    res.render("Campgrounds/show", {campground})
}

module.exports.renderEditForm = async(req,res) => {
    const {id} = req.params;
    const campground = await Campground.findById(id);
    if(!campground){
        req.flash('error', "Can't find campground");
        return res.redirect('/campgrounds');
    }
    res.render('Campgrounds/edit', {campground});
}

module.exports.updateCampground = async(req,res) => {
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id,{...req.body.campground});
    const geoData = await maptilerClient.geocoding.forward(req.body.campground.location, { limit: 1 });
    campground.geometry = geoData.features[0].geometry;
    const imgs = req.files.map(f=>({url: f.path, filename: f.filename}));
    campground.images.push(...imgs);
    await campground.save();
    if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({$pull:{images:{filename: {$in: req.body.deleteImages}}}})
    }
    req.flash('success', "Successfully Updated Campground");
    res.redirect(`/campgrounds/${campground._id}`);
}

module.exports.deleteCampground = async(req,res) => {
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', "Succuessly Deleted a Campground");
    res.redirect('/campgrounds/');
}