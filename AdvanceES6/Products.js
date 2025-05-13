const products =[
    {id: 1, product: 'Laptop', quantity: 2},
    {id: 2, product: 'Smartphone', quantity: 1},        
    {id: 3, product: 'Tablet', quantity: 3},
    {id: 4, product: 'Smartwatch', quantity: 1},
    {id: 5, product: 'Headphones', quantity: 0},
    {id: 6, product: 'Charger', quantity: 0},   
    {id: 7, product: 'Mouse', quantity: 0},
    {id: 8, product: 'Keyboard', quantity: 0},
    {id: 9, product: 'Monitor', quantity: 0}, 
    {id: 10, product: 'Printer', quantity: 0},
    {id: 11, product: 'Scanner', quantity: 0},  
    {id: 12, product: 'Webcam', quantity: 0},
    {id: 13, product: 'Speakers', quantity: 0},
    {id: 14, product: 'Projector', quantity: 0},
    {id: 15, product: 'External Hard Drive', quantity: 0},


]

function* getProducts(products, itemsPerPage){
    for(let i=0; i<products.length; i+=itemsPerPage){
        yield products.slice(i, i+itemsPerPage);
        console.log("i:")
    }
}

const paginatedProducts = getProducts(products, 5);

console.log(paginatedProducts.next().value);
console.log(paginatedProducts.next().value);        
console.log(paginatedProducts.next().value);
console.log(paginatedProducts.next().value);