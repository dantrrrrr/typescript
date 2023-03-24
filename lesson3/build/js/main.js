"use strict";
let stringArr = ["one", "two", "three"];
let guitars = ["start", "classic", "acoutis", 9878];
let mixedData = ["dantr", 981, true];
stringArr[0] = "dantr";
stringArr.push("dantr hello ");
guitars[0] = 987;
guitars.unshift("jim");
let test = [];
let bands = [];
//tuple
let myTuples = ["dantr", 2839, true];
let mixed = ["john", 1, false];
mixed = myTuples;
myTuples[1] = 982;
// object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "dantr",
    prop2: true,
};
exampleObj.prop2 = false;
let evh = {
    name: "dantr",
    active: true,
    albums: ["new", "old", 6969],
};
let jb = {
    name: "hndt",
    active: false,
    albums: ["cu", "moi", 879, 978],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "hello undefined";
};
console.log(greetGuitarist(evh));
// console.log(greetGuitarist(jb));
//enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 3] = "U";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["A"] = 7] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
