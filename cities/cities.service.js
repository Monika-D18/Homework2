const NotFoundError = require('../errors/not-found.error');
const citiesRepository = require('./cities.repository');

module.exports = {
    async getCityByZipCode(zipCode){
        const result = await citiesRepository.getCityDataByZipCode(zipCode)
         if(!result)
             throw new NotFoundError('No city found')
         zip = result['places'][0]['place name'] + " , " +  result['places'][0]['state abbreviation'] + " , " +  result['country']
         return zip
    }
}
