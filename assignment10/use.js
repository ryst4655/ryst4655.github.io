// Problem 1

let employeeList =
{"employees" : [
    {
        "first_name" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raise_eligible" : true
    },
    {
        "first_name" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raise_eligible" : true
    },
    {
        "first_name" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raise_eligible" : false
    }
]}

console.log(employeeList);


// Problem 2

let company = 
    { "companyName" : "Tech Stars",
     "website" : "www.techstars.site",
     "employees" : [
         {
             "first_name" : "Sam",
             "department" : "Tech",
             "designation" : "Manager",
             "salary" : 40000,
             "raise_eligible" : true
         },
         {
             "first_name" : "Mary",
             "department" : "Finance",
             "designation" : "Trainee",
             "salary" : 18500,
             "raise_eligible" : true
         },
         {
             "first_name" : "Bill",
             "department" : "HR",
             "designation" : "Executive",
             "salary" : 21200,
             "raise_eligible" : false
         }
     ]
    }

    // Problem 3

console.log(company);

    let employee = {
    "first_name" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raise_eligible" : false
};
company.employees.push(employee);

console.log(company.employees);

// Problem 4

let salaryTotal = 0
    for (let i=0; i < company.employees.length; i++){
    salaryTotal = salaryTotal += company.employees[i]['salary'];
    }
    console.log(salaryTotal);

// Problem 5 

for (let i=0; i < company.employees.length; i++){
    if(company.employees[i]["raise_eligible"]=== true){
        company.employees[i]['salary'] += company.employees[i]['salary'] * .1;
        company.employees[i]['raise_eligible'] = false;
    }
}
console.log(company.employees);

// Problem 6 

let check = false;
let wfh = ['Anna','Sam'];
for (let i=0; i < company.employees.length; i++){
    let name = company.employees[i].first_name;
    for (let k = 0; k < 2; k++){
        if(wfh[k] == name){
            check = true;
        }
}
    if(check == true){
        company['employees'][i].work_from_home = true;
    } else {
        company['employees'][i].work_from_home = false;
    }}
    console.log(company.employees);
console.log(wfh);