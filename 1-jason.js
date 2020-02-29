const fs = require('fs')

const book = {
    title: 'Antifragil',
    author: 'Nassim Nicholas Taleb'
}

const bookJson = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJson)

const bookBuffer = fs.readFileSync('1-json.json')
const bookString = bookBuffer.toString()
const bookJsonReaded = JSON.parse(bookString)
console.log(bookJsonReaded.title)