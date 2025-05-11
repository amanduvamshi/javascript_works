const product1 = { id: 1, name: "Laptop", price: 999.99 };

const product2 = { id: 2, name: "Smartphone", price: 499.99 };

let cart = [product1, product2];

const product3 = { id: 3, name: "Tablet", price: 299.99 };

let updatedCart = [...cart, product3];

const product4 = { id: 4, name: "Smartwatch", price: 199.99 };

updatedCart = [...updatedCart, product4];

console.log(updatedCart);

//Destructuring

const { id, name, price } = product1;
console.log(`Product ID: ${id}, Name: ${name}, Price: $${price}`);

// Destructuring allows you to extract values from objects or arrays and assign them to variables in a more concise way.
// This is particularly useful when dealing with complex data structures, such as nested objects or arrays. 

const addToCart = (...products) => {
    cart = [...updatedCart, ...products]
}

const product5 = { id: 5, name: "Headphones", price: 199.99 };
const product6 = { id: 6, name: "Charger", price: 29.99 };

addToCart(product5, product6);
console.log(cart);




//Note: Using the spread operator (...cart) to add items to an array creates a new array each time. While this is fine for small arrays, it could impact performance for larger arrays. Consider using Array.prototype.push if mutability is acceptable.
