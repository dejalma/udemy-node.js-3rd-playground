const chalk = require('chalk')

const doWorkPrimise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([7, 4, 1])
        reject('Things went wrong!')
    }, 3000)
})

doWorkPrimise.then((result) => {
    console.log(chalk.green.bold.inverse('Success!'), result)
}).catch((error) => {
    console.log(chalk.red.bold.inverse('Error!'), error)
})

console.log(chalk.yellow.bold.inverse('Bernando Arantes'))
