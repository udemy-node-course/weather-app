const request = require('request')
const geocode = require('./utils/geocode.js')

// const url = 'http://api.weatherstack.com/current?access_key=ec8092c5e8888945d0a198a0225e5999&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     // console.log(response.body.current)
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. The current temperature is '
//             + response.body.current.temperature +
//             ' degrees. It feels like ' + response.body.current.feelslike + 
//             ' degrees.')
//     }
// })

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2dpZ2xpIiwiYSI6ImNrOThvbjNpZDE3eDIzZ211dmx3ZDhlcnEifQ.3TkAtUx9vVww-7bK1Mt3wQ&limit=1'

// request({ url: geoUrl, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to geo service')
//     } else if (!response.body.features.length) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.features[0].center)
//         console.log('Latitude: ' + response.body.features[0].center[1],
//             '\nLongitude: ' + response.body.features[0].center[0])
//     }
// })

geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})