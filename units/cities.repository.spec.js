const { getCityDataByZipCode } = require('../cities/cities.repository')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)
chai.should()
const sinon = require('sinon');
const { Axios, default: axios } = require('axios');

describe("Testing cities.repository.js file", function () {
    describe("Testing getCityDataByZipCode function", function () {
        before(() => {
            sinon.stub(axios, 'get').yields(null, null, JSON.stringify([
                {
                    'post code': '94122',
                    country: 'United States',
                    'country abbreviation': 'US',
                    places: [
                        {
                            'place name': 'San Francisco',
                            longitude: '-122.4836',
                            state: 'California',
                            'state abbreviation': 'CA',
                            latitude: '37.7593'
                        }
                    ]
                }
            ]))
        })
        after(() => {
            axios.get.restore()
        })
        it('Returns the data of the city with the mentioned zip code, called exactly once', (res) => {
            getCityDataByZipCode(94122).then((city) => {
                city.forEach(city => {
                    expect(city).to.have.been.called.once('DONE')
                })
            })
            res()
        })
    })
})
