console.log("Task 1: Employee Salary");
function empsalary(salary){
    let yearlysal=salary*12;
return yearlysal;
}
console.log(empsalary(45000));

console.log("Task 2: Student Result Portal");
function result(mark){
    if(mark>=35){
        console.log("Congurates you get Pass !!");
    }
    else{
        console.log("Sorry You get Fail !!");
    }
}
result(72);

console.log("Task 3: Food Bill");
function bill(burger,quantity){
    let total_bill=burger*quantity;
    return total_bill;
}
console.log(`Your total Bill: ${bill(180,3)}`);

console.log("Task 4: Welcome Employee");
function employee(name,department){
    console.log(`Welcome ${name}`);
    console.log(`Department : ${department}`);
}
employee("Silambu","Development");
console.log("Task 5: Shopping Discount");
function discount(price,discount){
    let final=price-discount;
    return final;
}
console.log(`Final Amount: ${discount(5000,500)}`);

console.log("Task 6: Company Login");
function callbackfun(callback){
    console.log("Login Successful");
    callback();
}
function dasboard(){
    console.log("Loading Dashboard....");
}
callbackfun(dasboard);

console.log("Task 7:Food Delivery");
function recevied(){
console.log("Order Recivised");
}
function prepar(){
console.log("Preparing Food");
}

function Outdelivery(){
    console.log("Out for Delivery");  
}

function delivery(text){
   console.log(text);
}
delivery('Order Delivered',Outdelivery(prepar(recevied())));

console.log("Task 8: Lucky Draw");
function *generator(){
    yield" 10% Cash Back",
    yield" 20% Cash Back",
    yield" 50% Cash Back",
    yield" Better Luck Next Time"
}
let genval=generator();
console.log(genval.next().value);
console.log(genval.next().value);
console.log(genval.next().value);
console.log(genval.next().value);

console.log("Task 9: Employee Bonus");
function bonus (empsalary,empbonus){
    let Total_salary=empbonus+empsalary;
    return Total_salary;
}
console.log(`Your Total Salary : ${bonus(50000,5000)}`);

console.log("Task 10: Merge Employee Details");
let employeePersonal={
     name:"Silambu",
     Qualification:"B.E(cse)",
     Skills:"HTML,CSS,JavaScript,JAVA,SQL"
}
let employeeOffice={
  
    empid:"SK-26-3189",
    department:"Development",
    salary:45000,

}
let totalemp={...employeePersonal,...employeeOffice}
console.table(totalemp);

console.log("Task 11: Shopping Cart");
let cart1={
    item1:"Labtop",
    item2:"Mobile"
}
let cart2={
    item3:"SmartTv-43inch",
    item4:"Smart Watch"
}
let total_cart={...cart1,...cart2}
console.log(total_cart);

console.log("Task 13: Product Details");
function restoperator(name,a,b,c,d){
console.log(`Student Name:${name}`);
let totalMark=a+b+c+d;
let average=totalMark/4;
console.log(`Total Mark: ${totalMark}`);
console.log(`Average Mark:${average}`);
}
restoperator('Silambu',90,85,88,95);

console.log("Task 13: Product Details");
let objectdestructure={
    name:"Laptop",
    price:65000,
    brand:"Dell",
    stock:20
}
let{name,price,brand,stock}=objectdestructure;
console.log(`Brand Name:${name}`);
console.log(`Price: ${price}`);

console.log("Task 14: Customer Details");
let array=[101,"Naveen","Chennai",9876543210];
let[id,name1,city,phoneno]=array;
console.log(`ID:${id}`);
console.log(`Name:${name1}`);
console.log(`City:${city}`);

console.log("Task 15: Add Product");
let cart=["Mobile","Laptop"];
    cart.push("Headphone");
    console.log(cart);

console.log("Task 16: Remove Last Product");
let cart3=["Mobile","Laptop","Headphone"];
cart3.pop();
console.log(cart3);

console.log("Task 17:Replace Employee");
let namearr=["Rahul","Arun","John","David"];
namearr.splice(2,1,"Naveen");
console.log(namearr);

console.log("Task 18: Search Product");
let products=["Mouse","Keyboard","Monitor","Laptop"];
console.log(products.includes("Laptop"));

console.log("Task 19: Employee Ranking");
let Salaries=[25000,45000,30000,70000];
console.log(Salaries.sort());

console.log("Task 20: Reverse Chat Messages");
let Message=["Hi","Hello","How are you?","Good Morning"];
console.log(Message.reverse());

console.log("Employee Management System");

let empdetails=[];
function addEmployee(id, name,department, salary, bonus) {
    empdetails.push({ id, name,department, salary, bonus});
}
addEmployee(101,"siva","Testing",49000,5000);
addEmployee(102,"silambu","Development",25000,5000);
addEmployee(103,"Baalakumaran","UI",37000,15000);
addEmployee(104,"Naveen","trainee",27000,7000);
addEmployee(105,"praveen","Data Analyst",57000,7000);
function viewemp(empview){
   console.log(empview);
}
viewemp(empdetails);
 var checkid=103;
function searchid(empid){
    for(let userid of empid){
    if(checkid==userid.id){
        console.log(userid);
        } 
        
    }
  
}
searchid(empdetails);
  
function calculatesalary(finalsalary,salid){
    for(let sal of finalsalary){
        if(sal.id==salid){
        let totalsalary=sal.salary+sal.bonus;
        console.log(`Your final salary:${totalsalary}`);
        }
        
    }
      
}

calculatesalary(empdetails,checkid);
function removeemp(deleteemp,delid){
    for(let rem of deleteemp){
        if(rem.id==delid){
    deleteemp.pop(rem.id);
    console.table(deleteemp);
        }
    }
}
removeemp(empdetails);
function sortBySalary(emplist) {
    emplist.sort((a, b) => a.salary - b.salary);
    console.table(emplist);
}
sortBySalary(empdetails);
let check_name='siva';
function searchname(empname){
    for(let username of empname){
    if(check_name==username.name){
        console.log(username);
        
        } 
        
    }
  
}
searchname(empdetails);

function displaydestructure(employeeSystem){
   for(let empslist of employeeSystem)
    {
            var {id, name,department, salary, bonus}=empslist;
            console.table(`ID:${id}`);
            console.table(`Name:${name}`);
            console.table(`Department:${department}`);
            console.table(`Salary:${salary}`);
            console.table(`Bonus:${bonus}`);
            console.log(`=================Next Employee Details==========`);

    }
}
displaydestructure(empdetails);