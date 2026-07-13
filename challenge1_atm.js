let storedPin = "1234";
let currentBalance = 5000;
let failedAttempts = 0;
let isLocked = false;
let selectedOperation = "";
let transactionAmount = 0;

function validatePin(enteredPin) {
    if (isLocked) {
        console.log("Account is locked. Too many incorrect PIN attempts.");
        return false;
    }

    if (enteredPin === storedPin) {
        failedAttempts = 0;
        console.log("PIN validated successfully.");
        return true;
    } else {
        failedAttempts = failedAttempts + 1;
        console.log("Incorrect PIN. Attempt " + failedAttempts + " of 3.");

        if (failedAttempts >= 3) {
            isLocked = true;
            console.log("Account locked due to 3 incorrect PIN attempts.");
        }

        return false;
    }
}

function isFourDigitPin(pin) {
    if (typeof pin !== "string") {
        return false;
    }

    if (pin.length !== 4) {
        return false;
    }

    for (let char of pin) {
        if (char < "0" || char > "9") {
            return false;
        }
    }

    return true;
}

function withdraw(enteredPin, amount) {
    selectedOperation = "Withdraw";
    transactionAmount = amount;

    if (!validatePin(enteredPin)) {
        return;
    }

    if (amount <= 0) {
        console.log("Error: Withdrawal amount must be greater than zero.");
        return;
    }

    if (amount > currentBalance) {
        console.log("Error: Insufficient balance. Available balance: " + currentBalance);
        return;
    }

    currentBalance = currentBalance - amount;
    console.log("Success: Withdrew " + amount + ". New balance: " + currentBalance);
}

function deposit(enteredPin, amount) {
    selectedOperation = "Deposit";
    transactionAmount = amount;

    if (!validatePin(enteredPin)) {
        return;
    }

    if (amount <= 0) {
        console.log("Error: Deposit amount must be greater than zero.");
        return;
    }

    currentBalance = currentBalance + amount;
    console.log("Success: Deposited " + amount + ". New balance: " + currentBalance);
}

function checkBalance(enteredPin) {
    selectedOperation = "Check Balance";

    if (!validatePin(enteredPin)) {
        return;
    }

    console.log("Current balance: " + currentBalance);
}

function changePin(enteredPin, newPin) {
    selectedOperation = "Change PIN";

    if (!validatePin(enteredPin)) {
        return;
    }

    if (!isFourDigitPin(newPin)) {
        console.log("Error: New PIN must contain exactly four digits.");
        return;
    }

    storedPin = newPin;
    console.log("Success: PIN changed successfully.");
}

console.log("---- Check Balance (correct PIN) ----");
checkBalance("1234");

console.log("---- Withdraw more than balance ----");
withdraw("1234", 10000);

console.log("---- Withdraw valid amount ----");
withdraw("1234", 500);

console.log("---- Deposit negative amount ----");
deposit("1234", -50);

console.log("---- Deposit valid amount ----");
deposit("1234", 1000);

console.log("---- Change PIN (invalid, not 4 digits) ----");
changePin("1234", "12a4");

console.log("---- Change PIN (valid) ----");
changePin("1234", "4321");

console.log("---- Withdraw using old PIN (should fail) ----");
withdraw("1234", 100);

console.log("---- Bonus: Lock account after 3 wrong PIN attempts ----");
withdraw("0000", 100);
withdraw("1111", 100);
withdraw("2222", 100);
withdraw("4321", 100); 