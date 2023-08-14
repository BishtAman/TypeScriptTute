// traditional way to declare variables:
// const small = 's';
// const medium = 'm';
// const large = 'l';

// here we use enums
const enum size {small = 's', medium = 'm', large = 'l'}; //const generate more optimised js code
console.log(size.large)
let mySize: size = size.large