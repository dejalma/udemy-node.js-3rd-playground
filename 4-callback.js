const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 4000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})

// calc

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})
