const name = 'Dejalma'
const userAge = 40

const user = {
    name,
    age: userAge,
    location: 'Cuiaba'
}

console.log(user)

const product = {
    label: 'Red book',
    price: 3,
    stock: 1002,
    salePrice: undefined,
    rating: 4.1
}

const {label: productLabel, stock, rating = 5} = product
console.log(productLabel, stock, rating)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('action', product)

transaction('action')