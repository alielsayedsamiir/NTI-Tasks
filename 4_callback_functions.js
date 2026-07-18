function greetUser(name, callback) {
    console.log("Hello " + name + "!");
    callback();
}

greetUser("Esraa", () => {
    console.log("Callback executed after greeting.");
});

console.log("----------------------");

function calculate(num1, num2, operationCallback) {
    let result = operationCallback(num1, num2);
    console.log("Result: " + result);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

calculate(10, 5, add);
calculate(10, 5, subtract);
calculate(10, 5, multiply);

console.log("----------------------");

function loadData(callback) {
    console.log("Loading data...");

    setTimeout(() => {
        let data = ["Item1", "Item2", "Item3"];
        callback(data);
    }, 2000);
}

loadData((data) => {
    console.log("Data loaded:");
    for (let item of data) {
        console.log(item);
    }
});

console.log("----------------------");

function login(username, password, callback) {
    console.log("Attempting login for " + username + "...");

    setTimeout(() => {
        if (username === "esraa" && password === "12345") {
            callback(true, username);
        } else {
            callback(false, username);
        }
    }, 1000);
}

function onLoginResult(success, username) {
    if (success) {
        console.log("Login successful. Welcome " + username + "!");
        goToDashboard();
    } else {
        console.log("Login failed. Invalid username or password.");
    }
}

function goToDashboard() {
    console.log("Redirecting to dashboard...");
}

login("esraa", "12345", onLoginResult);
login("ali", "wrongpass", onLoginResult);
