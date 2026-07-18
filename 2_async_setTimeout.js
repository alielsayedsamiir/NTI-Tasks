console.log("Hello");

setTimeout(() => {
    console.log("World");
}, 2000);

console.log("----------------------");

function printNumbersWithDelay() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}

printNumbersWithDelay();

console.log("----------------------");

console.log("Loading...");

setTimeout(() => {
    console.log("Done");
}, 3000);

console.log("----------------------");

function sendDelayedMessage(message, delay) {
    console.log("Message scheduled: " + message);

    setTimeout(() => {
        console.log("Message received: " + message);
    }, delay);
}

sendDelayedMessage("Meeting at 5 PM", 2000);
sendDelayedMessage("Server backup complete", 1000);
