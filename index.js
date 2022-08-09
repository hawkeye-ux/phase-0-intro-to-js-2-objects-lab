// Write your solution in this file!
let employee = {
    name : "",
    address : "",
    street : "",
    zip : "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeNew = {...employee};
    employeeNew[key] = value;
    return employeeNew;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let employeeNew = {...employee}
    delete employeeNew[key];
    return employeeNew;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

