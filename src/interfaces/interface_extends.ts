interface Persona{
    nombre:string;
    apellido:string;
}


interface Empleado extends Persona{
    id:number;
}

interface Cliente extends Persona{
    id:number;
}

const empleado1: Empleado={
    id: 1, 
    nombre: 'Harry',
    apellido: ""
}

