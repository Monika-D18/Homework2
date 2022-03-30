const errorHandler = require('./middlewares/error-handler.middleware');
const citiesController = require('./cities/cities.controller');
const citiesService =  require('./cities/cities.service');
const express = require('express')
const app = express()


app.get('/',(req, res)=>{
    res.send('Hello')
})

app.use('/cities', citiesController)

app.use((err, req, res, next) => {
     res.send(err.message)  
})

const port = 3000
app.listen(port, ()=>{
    console.log(`App is running  on port ${port}`)
})

app.use(errorHandler);
