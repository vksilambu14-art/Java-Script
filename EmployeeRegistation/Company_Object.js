console.log("Task 3: Company Object");
console.log("---------------------------------");
let company={
    companyName:"Stackly",
    location:["Bengaluru","Chennai","Hyderabad","Salem","Coimbatore"],
    employees:100,
    technologies:["HTML","CSS","JavaScript","React","Git"]
};
console.log(`${"Company Name        : "}${company.companyName}`);
console.log(`${"Location            : "}${company.location}`);
console.log(`${"Total Employees     : "}${company.employees}`);
console.log(`${"Second Technology   : "}${company.technologies[1]}`);
console.log(`${"Total Technologies  : "}${company.technologies}`);