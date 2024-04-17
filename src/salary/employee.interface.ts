import { Department } from './departament.enum';

// Definición de la interfaz para un empleado
export interface Employee {
    id: number;
    name: string;
    department: Department;
    salary: number;
}
