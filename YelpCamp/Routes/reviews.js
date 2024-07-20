const express = require('express');
const router = express.Router({mergeParams:true});
const {reviewSchema} = require('../schemas')
const Campground = require("../Models/campground");
const Review = require("../Models/review");
const catchAsync = require('../Utilities/catchAsync')
const ExpressError = require('../Utilities/ExpressError');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const reviews = require('../Controllers/reviews');



router.post('/',isLoggedIn,validateReview,catchAsync(reviews.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router;