const arrayNumbers = [2, 4, 5, 8, 9, 4];

const sumArrayNumbers = arrayNumbers.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 100)

console.log(sumArrayNumbers);

const shoppingCart = [
    {product: "Cuscuz", amount: 2, price: 20},
    {product: "Café", amount: 3, price: 40},
    {product: "Feijão", amount: 4, price: 60},
];

const sumShoppingCart = shoppingCart.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.price * currentValue.amount;
}, 0)

console.log(sumShoppingCart);

