const rewire = require('rewire')
rewire('../cities/cities.service')
const {getCityByZipCode} = require('../cities/cities.service')
const chai = require('chai')
const {faker} = require('@faker-js/faker');
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)
chai.should()


describe("Testing cities.service.js file", function(){
    describe("Testing getCityByZipCode function", function(){
        it('Returns the  city with the given zip code', function(){
            return expect(getCityByZipCode(94122)).to.eventually.equal('San Francisco , CA , United States')
        })
        it('Returns an error when the  city with the given zip code is not found', function(){
            return expect(getCityByZipCode(faker.address.zipCode())).to.eventually.be.rejectedWith('Request failed with status code 404')      
        })
    })  
})
