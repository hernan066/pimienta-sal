var express = require('express');
var router = express.Router();

const  { detail }= require('../controllers/productCotroller')
const  { detailSlug }= require('../controllers/productCotroller')

/* /products */
//router.get('/details/:id', detail);
router.get('/details/:slug', detailSlug);


module.exports = router;
