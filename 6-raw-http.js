const https = require('https')

const url = 'https://api.darksky.net/forecast/f1d6089796845c6d3f07739c0bd65f37/1,2?units=si&lang=en'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        console.log(chunk)
        data = data + chunk.toString()
    })

    response.on('end', () => {
        console.log(data)

        const body = JSON.parse(data)
        console.log (body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
