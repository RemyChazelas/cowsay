const myInformation = require('./information.js');


let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `my name is ${myInformation.name}, my campus is ${myInformation.campus}`,
    e : "oO",
    T : "U "
}));
