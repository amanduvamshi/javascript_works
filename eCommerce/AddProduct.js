const product1 = { id: 1, name: "Laptop", price: 999.99 };
const product2 = { id: 2, name: "Smartphone", price: 499.99 };

const cart = [product1, product2];

const product3 = { id: 3, name: "Tablet", price: 299.99 };

let updatedCart = [...cart, product3];

const product4 = { id: 4, name: "Smartwatch", price: 199.99 };

updatedCart = [...updatedCart, product4];

console.log(updatedCart);

//Note: Using the spread operator (...cart) to add items to an array creates a new array each time. While this is fine for small arrays, it could impact performance for larger arrays. Consider using Array.prototype.push if mutability is acceptable.