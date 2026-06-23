console.log("Task 1: Employee Information System");
let name=prompt("Enter the Employee Name");
let age=prompt("Enter the Employee age");
let dept=prompt(" Enter the Employee Department");
let sal=prompt("Enter the Employee Salary");
let empdetails={
    empname:(`${name}`),
    empage:(`${age}`),
    empdpt:(`${dept}`),
    empsal:(`${sal}`)
}
if(empdetails.empsal>30000){
    console.log(`Employee Name: ${empdetails.empname}`);
    console.log(`Employee Age: ${empdetails.empage}`);
    console.log(`Employee Department: ${empdetails.empdpt}`);
    console.log(`Employee Salary: ${empdetails.empsal}`);
}
else{
    console.log("Not eligible for display");
}

console.log("Task 2: Supermarket Billing");
 var items=prompt("Enter the items you want to purchase ");
 var price=prompt("Enter the price of the items");
    var quantity=prompt("Enter the quantity of the items");
    var total=price*quantity;
    if(total>5000){
        finaltotal=total-(total*0.1);
        console.log(`Final amount: ${finaltotal}`);
    }
    else{
        console.log(`Total amount: ${total}`);
    }

console.log("Task 3: Employee Portal");
let stdname=prompt("Enter your name:-");
let stdmark=prompt("Enter your mark:-");
if(stdmark>=90){
    console.log(`Congratulations ${stdname}! You have achieved an A grade with a mark of ${stdmark}.`);
}
else if(stdmark>=75){
    console.log(`Good job ${stdname}! You have achieved a B grade with a mark of ${stdmark}.`);
}
else if(stdmark>=50){
    console.log(`Well done ${stdname}! You have achieved a C grade with a mark of ${stdmark}.`);
}
else{
    console.log(`Keep trying ${stdname}! You have a mark of ${stdmark}.`);
}

console.log("Task 4: Bank ATM Eligibility");    
let username=prompt("Enter your username:-");
let accbalance=prompt("Enter your account balance:-");
let withdrawalamount=prompt("Enter the withdrawal amount:-");
if(accbalance>=withdrawalamount){
    console.log("Transaction successful. Please collect your cash.");

}
else{
    console.log("Insufficient balance. Transaction failed.");
}

console.log("Task 5: Login Validation");
let userName="silambu";
let userPassword="silambu123";
let Name=prompt("Enter your username:-");
let password=prompt("Enter your password:-");
if(userName===Name&&userPassword===password){
    console.log("Login successful. Welcome to the Employee Portal!");
}
else{
    console.log("Invalid username or password. Please try again.");
}

console.log("Task 6: Online Food Order");
let fooditem=["idly","paroota","Chapati","Vada-sambar","Uppuma","Tea","Coffee","Biriyani","Panner"];
    console.log(`First Food Item: ${fooditem[0]}`);
    console.log(`Last Food Item: ${fooditem[fooditem.length-1]}`)
console.log("Total Number of Food Items");
for(let a of fooditem){
  
    console.log(a);
}

console.log("task 7:Company Employee Directory")
let empdata={
name:"silambu",
age:"26",
department:"Software Development",
salary:"25000",
experience:"2year"
}
for(let data in empdata){
    console.log(`${data}:${empdata[data]}`);
}

console.log("Task 8: Traffic Signal System");
let trafficlight=prompt("Enter your signal:");
switch(trafficlight){
    case trafficlight="Red":
        
        console.log("Please stop");
        break;
    case trafficlight="Yellow":
       
        console.log("GET READY FOR RIDE");
        break;
    case trafficlight="Green":
        trafficlight="Green"
        console.log("Go");
        break;
default:
    trafficlight="Invalid Signal";
}

console.log("Task 9: Age Category Checker");

    let childage = prompt("Please enter your age:");
if (childageage >= 0 && childageage <= 12) {
    console.log("Child");
} else if (childageage >= 13 && childage <= 19) {
    console.log("Teenager");
} else if (childageage >= 20 && childageage <= 59) {
    console.log("Adult");
} else if (childageage >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid age input");
}

console.log("Task 10: Employee Attendance");
let empName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");
let result = (attendance)? `Welcome ${empName} Attendance: ${attendance}` : `Attendance ${attendance}`;
console.log(result);