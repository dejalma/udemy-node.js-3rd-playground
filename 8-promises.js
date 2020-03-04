const chalk = require('chalk')

const doWorkPrimise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 4, 1])
        //reject('Things went wrong!')
    }, 1000)
})

doWorkPrimise.then((result) => {
    console.log(chalk.green.bold.inverse('Success!'), result)
}).catch((error) => {
    console.log(chalk.red.bold.inverse('Error!'), error)
})

console.log(chalk.yellow.bold.inverse('Bernando Arantes'))

// promises chaining

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(chalk.green(sum))

    add(sum, 3).then((sum) => {
        console.log(chalk.green(sum))

    }).catch((error) => {
        console.log(chalk.red(error))
    })
}).catch((error) => {
    console.log(chalk.red(error))
})

add(4, 5).then((sum) => {
    console.log(chalk.green(sum))
    return add(sum, 6)
}).then((sum) => {
    console.log(chalk.green(sum))
}).catch((error) => {
    console.log(chalk.red(error))
})
