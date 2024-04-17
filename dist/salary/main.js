"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const salarycalculator_1 = require("./salarycalculator");
const departament_enum_1 = require("./departament.enum");
// Objeto empleado
const employee1 = {
    id: 1,
    name: "Juan",
    department: departament_enum_1.Department.IT,
    salary: 50000
};
// Mostrar información del empleado
console.log("Información del empleado:");
console.log("Nombre:", employee1.name);
console.log("Departamento:", employee1.department);
console.log("Salario:", employee1.salary);
// Calcular y mostrar aumento de salario
const salaryIncrease = (0, salarycalculator_1.calculateSalaryIncrease)(employee1);
console.log("Aumento de salario:", salaryIncrease);
