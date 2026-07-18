console.log("One");

setTimeout(() => {
    console.log("Two");
}, 0);

console.log("Three");

console.log("----------------------");

console.log("A");

setTimeout(() => {
    console.log("B (from setTimeout)");
}, 0);

console.log("C");
console.log("D");

console.log("----------------------");

console.log("Line 1");
console.log("Line 2");

setTimeout(() => {
    console.log("This runs later, even though it appears here");
}, 500);

console.log("Line 3");
console.log("Line 4");

console.log("----------------------");

function heavySyncWork() {
    console.log("Doing synchronous work...");
    for (let i = 0; i < 3; i++) {
        console.log("Working step " + (i + 1));
    }
    console.log("Synchronous work finished");
}

console.log("Program Start");

setTimeout(() => {
    console.log("Timer callback executed (Call Stack was empty)");
}, 0);

heavySyncWork();

console.log("Program End");
