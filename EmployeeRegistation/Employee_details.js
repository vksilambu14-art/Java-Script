console.log("Task 1: Employee Registration");
console.log("Employee Details:");
console.log("---------------------------------");
let name = "Silambu V";
const empId="STK-26-3189";
let department="Development";
let salary=50000;
let emptype=confirm("Is Permanent Employee ?");

console.log(`${"Name          : "}${name}` );
console.log(`${"ID            : "}${empId}`)
console.log(`${"Department    : "}${department}`);
console.log(`${"Salary        : "}${salary}`);
console.log(`${"Permanent     : "}${(emptype ? "True" : "False")}`);
