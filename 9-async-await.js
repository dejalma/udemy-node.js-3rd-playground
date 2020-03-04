const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a < 0 || b < 0) {
            return reject('the params must be non-negative')
        }

        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    //throw new Error('Test error')
    // return 'be'

    const sum = await add(1, -99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
 
    return sum3
}

console.log(doWork())

doWork().then((result) => {
    console.log('result:', result)
}).catch((error) => {
    console.log(error)
})
