console.log("Task 6: Login Verification");
console.log("---------------------------------");
let username="silambu";
let password="silambu123";
let enteredUsername=prompt("Enter your username:-");
let enteredPassword=prompt("Enter your password:-");

console.log(`${"Login Status:"} ${enteredUsername===username && enteredPassword===password ? "Login Successful" : "Invalid Credentials"}`);