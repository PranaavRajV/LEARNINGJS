function employee(id, name, dept, salary) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
}

const employeedb = {};

function add(id, name, dept, salary) {
    const emp = new employee(id, name, dept, salary);
    employeedb[id] = emp;
    console.log(`employee with ${id} is added`);
}

function getemp() {
    const f = Object.values(employeedb);
    f.forEach((emp) => {
        console.log(`NAME: ${emp.name}, DEPT: ${emp.dept}, SALARY: ${emp.salary}`);
    });
}

// DETAILS BY ID
function getempdetails(id) {
    if (employeedb[id]) {
        return Object.entries(employeedb[id]);
    }
    return "Employee not found";
}

// FREEZE EMPLOYEE OBJECT
function freeze(id) {
    if (employeedb[id]) {
        Object.freeze(employeedb[id]);
        return `Employee ${id} is frozen`;
    } else {
        return `emp {${id}} not found`;
    }
}

// SEAL EMPLOYEE OBJECT
function seal(id) {
    if (employeedb[id]) {
        Object.seal(employeedb[id]);
        return `Employee ${id} is sealed`;
    } else {
        return `emp {${id}} not found`;
    }
}

// Add Employees
add(1, "Alice", "HR", 50000);
add(2, "Bob", "Tech", 75000);
add(3, "Charlie", "Finance", 60000);
add(4, "David", "Marketing", 45000);

// Get All Employees
console.log("\nAll Employees:");
getemp();

// Database Object
console.log("\nEmployee DB Object:");
console.log(employeedb);

// Get Employee Details
console.log("\nDetails of ID 1:");
console.log(getempdetails(1));

console.log("\nDetails of ID 5 (non-existent):");
console.log(getempdetails(5));

// Seal and Freeze Test
console.log("\nSealing ID 2:");
console.log(seal(2));

console.log("Freezing ID 3:");
console.log(freeze(3));

// Verify object after seal/freeze
console.log("\nUpdated DB After Seal/Freeze:");
console.log(employeedb);
