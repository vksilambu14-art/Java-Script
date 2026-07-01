console.log("Task 1: Find the Highest Salary");
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
console.table(employees);
let highestSalary=employees.sort((a,b)=> a.salary - b.salary);
var r=highestSalary[highestSalary.length-1];
console.log(`Highest Salary Employee:-\n Name:${r.name} \n Salary:${r.salary}`);
console.log("Task 2:  Find Employee by ID");
let searchId = 103;
let foundemployee=employees.find(employee =>employee.id==searchId)|| "Employee Not Found";
    console.log(foundemployee);
console.log("Task 3:Calculate Salary with Bonus");
let bonus=5000;
let finalSalary=employees.map(emp => {
   console.log(`${emp.name}:${emp.salary+bonus}`);

});
console.log("Task 4: Experience Check");
let employeeyear = [
{
    name:"Naveen",
    experience:2
},
{
    name:"John",
    experience:7
},
{
    name:"Arun",
    experience:5
}];
let expericecheck=employeeyear.filter(emp => {
   let check= (emp.experience>=5)? `${emp.name} :Senior Employee`:`${emp.name} : Junior Employee`;
    console.log(check); 
});
console.log("Task 5: Display Only Employee Names");
employeeyear.forEach(empname =>{
console.log(empname.name);
});
console.log("Task 6: Display Employee IDs");
let empids=employees.map(empid =>{
    return empid.id;
});
console.log(empids.toString());
console.log("Task 7:  Find Total Salary");
 var totalSalary=employees.reduce((acc,curr)=> {
 acc+=curr.salary;
 return acc;
},0);
console.log(`Total Salary of Employees:${totalSalary}`);
console.log("Task 8:Employees Earning More Than ₹40,000");
let highSalaery=employees.filter(emp => {
    if(emp.salary>40000){
    console.log(emp.name);
    }
});
console.log("Task 9:Increase Salary");
 let increaseSalary=employees.map(emp=>`${emp.name} : ${emp.salary+5000}` );
 console.log(increaseSalary.join('\n'));
console.log("Task 10:  Employee Report");
employees.forEach(emp=>{
    console.log(`Employee Name:${emp.name} \n Employee ID:${emp.id} \n Employee Salary:${emp.salary}`);
});
console.log("Challenge Task");
console.log(`Total number of employees : ${employees.length}` );

let heigh_salary=employees.sort((a,b)=> (a.salary - b.salary));
let highestsal=heigh_salary[heigh_salary.length-1];

console.log("===Highest salary===");
console.log(highestsal.salary);
console.log("===Lowest salary===");
let lowestsal=heigh_salary[0];
console.log(lowestsal.salary);
console.log("=======Total salary of all employees=====");
var totalSalary=employees.reduce((acc,curr)=> {
 acc+=curr.salary;
 return acc;
},0);
console.log(totalSalary);
console.log("=======Employee earning the highest salary=====");
console.log(highestsal.name +" : "+ highestsal.salary);
console.log("=======Employee earning the Lowest salary=====");
console.log(lowestsal.name +" : "+ lowestsal.salary);
console.log("=======Employees whose salary is greater than ₹40,000=====");
let highSalary=employees.filter(emp => {
    if(emp.salary>40000){
    console.log(emp.name + " : "+ emp.salary);
    }
});
console.log("=======Search an employee by ID=====");
 let empid=employees.find(emp => emp.id==103);
console.log(empid);
console.log("=======Add ₹5,000 bonus to every employee and display the new salary=====");
let newsalary=employees.map(emp => `${emp.name} : ${emp.salary+5000}`);
console.log(newsalary.join('\n'));
console.log("=======Print a professional employee report using template literals.=====");
employees.forEach(emp=>{
    console.log(`Employee Name:${emp.name} \n Employee ID:${emp.id} \n Employee Salary:${emp.salary}`);
});



