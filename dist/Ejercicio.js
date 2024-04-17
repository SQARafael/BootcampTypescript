"use strict";
// Enumeración para los departamentos de la empresa
var Department;
(function (Department) {
    Department["IT"] = "IT";
    Department["HR"] = "HR";
    Department["Sales"] = "Sales";
    Department["Finance"] = "Finance";
})(Department || (Department = {}));
// Función para calcular el aumento de salario basado en el departamento
function calculateSalaryIncrease(employee) {
    let increasePercentage = 0;
    switch (employee.department) {
        case Department.IT:
            increasePercentage = 0.1;
            break;
        case Department.HR:
            increasePercentage = 0.08;
            break;
        case Department.Sales:
            increasePercentage = 0.12;
            break;
        case Department.Finance:
            increasePercentage = 0.09;
            break;
        default:
            increasePercentage = 0.05;
            break;
    }
    return employee.salary * increasePercentage;
}
// Objeto empleado
const employee1 = {
    id: 1,
    name: "Juan",
    department: Department.IT,
    salary: 50000
};
// Mostrar información del empleado
console.log("Información del empleado:");
console.log("Nombre:", employee1.name);
console.log("Departamento:", employee1.department);
console.log("Salario:", employee1.salary);
// Calcular y mostrar aumento de salario
const salaryIncrease = calculateSalaryIncrease(employee1);
console.log("Aumento de salario:", salaryIncrease);
