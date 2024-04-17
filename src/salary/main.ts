import { Employee } from './employee.interface';
import { calculateSalaryIncrease } from './salarycalculator';
import { Department } from './departament.enum';

// Objeto empleado
const employee1: Employee = {
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
