const m1 = () => {

    let a =10;

    return () => {
        return a;
    }
}

const getA = m1();

console.log(getA()); // Output: 10