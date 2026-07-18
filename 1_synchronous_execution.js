console.log("Start");
console.log("Middle");
console.log("End");

console.log("----------------------");

function stepTwo() {
    console.log("Step 2: Inside stepTwo");
}

function stepOne() {
    console.log("Step 1: Before calling stepTwo");
    stepTwo();
    console.log("Step 3: After calling stepTwo");
}

stepOne();

console.log("----------------------");

function addNumbers(a, b) {
    return a + b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

let sumResult = addNumbers(5, 3);
console.log("Sum: " + sumResult);

let productResult = multiplyNumbers(4, 6);
console.log("Product: " + productResult);

console.log("----------------------");

function getPrice() {
    return 100;
}

function applyDiscount(price) {
    return price - (price * 0.10);
}

let originalPrice = getPrice();
let finalPrice = applyDiscount(originalPrice);

console.log("Original Price: " + originalPrice);
console.log("Final Price After Discount: " + finalPrice);
