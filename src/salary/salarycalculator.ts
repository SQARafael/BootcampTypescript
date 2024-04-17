import { Employee } from './employee.interface';
import { Department } from './departament.enum';


export function calculateSalaryIncrease(employee: Employee): number {
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
