
let userName="silambu";
let userpassword="silambu123";
let name=prompt("Enter your username:-");
let password=prompt("Enter your password:-");

let IsLoggin=userName=== name && userpassword===password;
let details={
    name: "Silambu V",
    id:"STK-26-3189",
    department:"Development",
    Experience:"3 years",
    salary:50000,
    bonus:5000,
    finalSalary:50000+5000,
    skills:[ "HTML", "CSS", "JavaScript", "React", "Git", "Node.js" ],
    Attendance:"92%",
    examstatus:"Eligible",
    loginStatus:"Success",
    company:"Stark",
    location:"Bangalore"
};
let loginStatus=IsLoggin ? 
console.log(`
==========================================
        Employee Portal 
==========================================
Employee Name : ${details.name}
Employee ID   : ${details.id}
Department    : ${details.department}
Experience    : ${details.Experience}
Salary        : ${details.salary}
Bonus         : ${details.bonus}
Final Salary  : ${details.finalSalary}
Skills        : ${details.skills}
Attendance    : ${details.Attendance}
Exam Status   : ${details.examstatus}
Login Status  : ${details.loginStatus}
Company       : ${details.company}
Location      : ${details.location}
=================================================`) : console.log("Invalid Credentials");
