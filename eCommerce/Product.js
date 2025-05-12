const orders =[
    {id: 1, product: 'Laptop', quantity: 2},
    {id: 2, product: 'Smartphone', quantity: 1},        
    {id: 3, product: 'Tablet', quantity: 3},
    {id: 4, product: 'Smartwatch', quantity: 1},
    {id: 5, product: 'Headphones', quantity: 0},
]
// Using the filter method to create a new array with products that have a quantity greater than 0
// This is a common pattern in functional programming, where you create new data structures based on existing ones without mutating them.
const availableProducts = orders.filter(order => order.quantity>0);

console.log(availableProducts);

availableProducts.forEach(order => { 
    console.log(`Product: ${order.product}, Quantity: ${order.quantity}`);
});

const productDetails = availableProducts.map(order => {
    console.log(`Product: ${order.product}, Quantity: ${order.quantity}`);
    return {
        product: order.product,
        quantity: order.quantity
    };
});

console.log("...........................................................................");

productDetails.forEach(order => {     
    console.log(`Product: ${order.product}, Quantity: ${order.quantity}`);
});

console.log("..........................................................................."); 

const productDetails2 = availableProducts.map(order => ({"product": order.product,  "qunatity":order.quantity}));

console.log(productDetails2);

