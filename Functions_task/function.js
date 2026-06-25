console.log("Task 1 : Employee Management System")
let employees=[
    {
        name:"Silambu",
        id:"STK-26-3189",
        salary:30000
    },
    {
        name:"Siva",
        id:"STK-26-2212",
        salary:40000
    },
    {
        name:"Vijay",
        id:"STK-26-3119",
        salary:50000
    },
    {
        name:"Naveen",
        id:"STK-26-3129",
        salary:60000
    },
    {
        name:"Ramkumar",
        id:"STK-26-3199",
        salary:70000
    }
]
for(let emp of employees){
    if(emp.salary>=40000){
        
         console.log("Employee Eligible For Bonus");
     }
     else{
       console.log("Employee Not Eligible For Bonus");
     }
    console.log(emp);
    
 }

 console.log("Task 2: Student Result Portal");
 
 
 let subject=["Tamil","English","Maths","Science","Social"];
 for (let sub=0; sub<subject.length; sub++){
 let marks=prompt(`Enter your ${subject[sub]} Marks:-`);
 var total=+marks;
 }
 let percent=total%100;
 if(percent>=90 ){
 console.log("Grade A+");
 }
 else if(percent>=80 && percent >=71){
 console.log("Grade A");
 }
 else if(percent>=70 &&  percent >=61){
 console.log("Grade B");
 }
 else if(percent>=60){
 console.log("Grade C");
 }
else{
 console.log("Fail");
 }
 
 console.log("Task 3: E-Commerce Cart");
 var products = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:1000},
    {name:"Keyboard", price:2000}
];
function totalbill(product){
    let productname=prompt(`Enter the product Name:-\n 1.Laptop\n 2.Mouse\n 3.Keyboard\n  `)
    let quantity=prompt(`Enter the ${productname} Quantity:- `);

 for(let items of products){
if(productname==items.name){
   var total=items.price*quantity;
}
}
if(total>=5000){
console.log("Your Eligible for 10% Discont");
let finalbill=total-total*0.1;
console.log(finalbill);
}
}
totalbill(products);

console.log("Task 4: Login Authentication");
let admin="silambu";
let password="simbu123";
let username=prompt("Enter you UserName:");
let userpass=prompt("Enter you Password:");

let login=(admin==username && password==userpass)?"Login Sucessfully":" Invalid Credentials";
console.log(login);

console.log("Task 5: Traffic Signal System");
let lights=prompt(`Enter your options:- \n 1.Red\n 2.Yellow\n 3.Green `);
switch(lights){
        case "Red":
        console.log("Please stop the vechile");
        break;

     case "Yellow":
        console.log("Get Ready for  the Ride!!!");
        break;
          case "Green":
        console.log("GO...");
        break;
    default:
        console.log("Invalid Signal");
}
console.log("Task 6: ATM Withdrawal System");
const cardpin="2425";
let accBalance=105060;
let amout=prompt("Enter the withdrawal Amount:-");
let pin=prompt("Enter Your Card Pin:-");
if(cardpin==pin && accBalance>=amout){
    let availablecash=accBalance-amout;
    console.log(`Please collect the Cash !!! \n Your available balance ${availablecash}`);

}
else{
    console.log("Sorry Your Enter incorrect Pin");
}
console.log("Task 7: Online Food Order");
function  delivered(order,callback){
callback();
console.log(`${order}: Your order is Delivered`);
}
function prepared(order){
    received();
    console.log("Your order is preparing");
}
function received(order){
    console.log(`your order is confirmed`); 
}
delivered("Tea",prepared)

console.log("Task 8: Cashback Generator");
    function* gen(){
        yield "10% Cashback"
        yield "20% Cashback"
        yield "50% Cashback"
        yield "Better Luck Next Time"

    }
let genval=gen();
console.log(genval.next().value);
console.log(genval.next().value);
console.log(genval.next().value);
console.log(genval.next().value);

console.log("Task 9: Hospital Patient Check");
let patientage=prompt("Enter your Age:-");
let patientweight=prompt("Enter your weight");
if(patientage>18){
    if(patientweight>50){
       console.log(" Eligible For Treatment");
    }
    else{
       console.log( "Not Eligible For Treatment");
     
    }
}
else{
       console.log( " Not Eligible Your age is below 18");
     
    }

console.log("Task 10: Final Real-Time Project");

let employees = [];
function addEmployee(id, name, salary) {
    let employee = {
        id: id,
        name: name,
        salary: salary
    };

    employees.push(employee);
    console.log("Employee Added Successfully!");
}
addEmployee(101, "Silambu", 50000);
addEmployee(102, "Gokul", 60000);
addEmployee(103, "naveen", 70000);

function viewEmployees() {
    if (employees.length === 0) {
        console.log("No Employees Found");
        return;
    }

    console.log("Employee List:");
    employees.forEach(function(emp) {
        console.log(
            `ID: ${emp.id}, Name: ${emp.name}, Salary: ${emp.salary}`
        );
    });
}

function searchEmployee(id) {
    let employee = employees.find(function(emp) {
        return emp.id === id;
    });

    if (employee) {
        console.log("Employee Found:", employee);
    } else {
        console.log("Employee Not Found");
    }
}

function calculateBonus(id) {
    let employee = employees.find(function(emp) {
        return emp.id === id;
    });

    if (employee) {
        let bonus = employee.salary * 0.10; 
        console.log(
            `${employee.name} Bonus = ${bonus}`
        );
    } else {
        console.log("Employee Not Found");
    }
}

function deleteEmployee(id) {
    let index = employees.findIndex(function(emp) {
        return emp.id === id;
    });

    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee Deleted Successfully!");
    } else {
        console.log("Employee Not Found");
    }
}


function totalEmployees() {
    console.log("Total Employees:", employees.length);
}


function performOperation(callback) {
    callback();
}

performOperation(viewEmployees);
searchEmployee(102);
calculateBonus(103);
deleteEmployee(101);
totalEmployees();
viewEmployees();

