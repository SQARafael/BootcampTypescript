"use strict";
function greet(name = 'Ron') {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}
function getNumberRandom() {
    return Math.floor(Math.random() * 100);
}
function printPosition(position) {
    console.log(`Latitude & Logitude are : LAT ${position.lat} LONG ${position.long}`);
}
printPosition({ lat: 3 });
