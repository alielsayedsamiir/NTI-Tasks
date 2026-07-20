function sendVerificationEmail(email) {

    return new Promise((resolve, reject) => {

        console.log("Sending verification email...");

        setTimeout(() => {
            if (email) {
                resolve("Email sent successfully");
            } else {
                reject("Failed to send email");
            }
        }, 1500);

    });

}

async function registerUser(name, email) {

    try {

        if (!name || !email) {
            console.log("Name and email are required.");
            return;
        }

        const emailResult = await sendVerificationEmail(email);
        console.log(emailResult);

        console.log("User registered successfully");

    } catch (error) {
        console.log(error);
    }

}

registerUser("Esraa", "esraa@gmail.com");

console.log("----------------------");

registerUser("", "missingname@gmail.com");
