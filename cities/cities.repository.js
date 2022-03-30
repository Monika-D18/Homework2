const axios = require('axios');

module.exports = {
     async getCityDataByZipCode(zipCode){
        const response = await axios.get(`https://api.zippopotam.us/us/${zipCode}`)    
        return response.data     
    }
}
