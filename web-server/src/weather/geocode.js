const request = require('request')

const geocode = (address, callback) => {
    // TODO HIDE the token and deploy
    const url = '' + address + '.json?access_token=?'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Could not connect to the service', undefined)
        } else if (body.features.length === 0) {
            callback('The location not found', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode