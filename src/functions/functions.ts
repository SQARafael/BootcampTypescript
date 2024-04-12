function greet(name:string='Ron'){
    console.log(`Hello, ${name.toUpperCase()} !!`)
}


function getNumberRandom():number{
    return Math.floor(Math.random()*100);
}


function printPosition(position:{lat:number, long?:number|string}){
    console.log(`Latitude & Logitude are : LAT ${position.lat} LONG ${position.long}`);
}

printPosition({lat:3});