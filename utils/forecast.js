const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ec8092c5e8888945d0a198a0225e5999&query=${latitude},${longitude}&units=f`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. The current temperature is '
                + response.body.current.temperature +
                ' degrees. It feels like ' + response.body.current.feelslike + 
                ' degrees.')
        }
    })
}

module.exports = forecast