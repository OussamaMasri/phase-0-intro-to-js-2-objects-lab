const employee = {name:"Oussama",
streetAddress:"Tripoli"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newstate = { ...employee };
    newstate[key] = value;
    return newstate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) { 
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}