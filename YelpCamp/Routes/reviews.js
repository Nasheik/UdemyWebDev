const express = require('express');
const router = express.Router({mergeParams:true});
const {reviewSchema} = require('../schemas')
const Campground = require("../Models/campground");
const Review = require("../Models/review");
const catchAsync = require('../Utilities/catchAsync')
const ExpressError = require('../Utilities/ExpressError');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');



router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(async(req,res)=>{
    const {id, reviewId} = req.params; 
    await Campground.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', "Succuessly Deleted a Review");
    res.redirect(`/campgrounds/${id}`);
}))

router.post('/',isLoggedIn,validateReview,catchAsync(async(req,res)=>{
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', "Created new Review");
    res.redirect(`/campgrounds/${campground._id}`);
}))

module.exports = router;