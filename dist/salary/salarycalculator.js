"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSalaryIncrease = void 0;
const departament_enum_1 = require("./departament.enum");
function calculateSalaryIncrease(employee) {
    let increasePercentage = 0;
    switch (employee.department) {
        case departament_enum_1.Department.IT:
            increasePercentage = 0.1;
            break;
        case departament_enum_1.Department.HR:
            increasePercentage = 0.08;
            break;
        case departament_enum_1.Department.Sales:
            increasePercentage = 0.12;
            break;
        case departament_enum_1.Department.Finance:
            increasePercentage = 0.09;
            break;
        default:
            increasePercentage = 0.05;
            break;
    }
    return employee.salary * increasePercentage;
}
exports.calculateSalaryIncrease = calculateSalaryIncrease;
