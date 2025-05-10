const blockScope = () => {
  if (true) {
    let x = 1;
    var y = 2;
    const z = 3;
  }
  console.log(y);
  /* console.log(z);
  console.log(x); */
};
blockScope();
// Output: 2