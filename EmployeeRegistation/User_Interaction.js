console.log("Task 10: User Interaction");
console.log("---------------------------------");
let userName=prompt("Enter your name:-");
let userAge=prompt("Enter your age:-");
let userMessage=confirm("Do you want to join our company?");
document.writeln(userMessage ? `${"Welcome: "} ${userName}` : `${"Thank You.!"}`);