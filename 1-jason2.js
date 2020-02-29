const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json2.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json3.json', userJSON)