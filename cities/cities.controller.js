const express = require('express');
const citiesService = require('./cities.service');
const asyncHandler = require('express-async-handler');
const route = express.Router();

 
route.get('/:zipCode', asyncHandler(async(req, res) => {
    try{
        zipCode = req.params['zipCode']
    const result = await citiesService.getCityByZipCode(zipCode)
        res.send(result);
    }
    catch(err){
        res.send('No city found')
    }
}))

module.exports = route;
