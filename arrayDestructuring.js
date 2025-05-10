const names = ["ram", "shyam", "mohan", "sita","laxman", "gita"];   
const [first, second, third,fifth,...rest] = names;
console.log(first); // Output: ram
console.log(second); // Output: shyam               
console.log(third); // Output: mohan
console.log(fifth); // Output: laxman
console.log(rest); // Output: [ 'sita', 'laxman', 'gita' ]


const numbers = [1, 2];
const [f, secondNum, thirdNum] = numbers;

console.log(f); // Output: 1
console.log(secondNum); // Output: 2                
console.log(thirdNum)