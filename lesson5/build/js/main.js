"use strict";
//convert to more or less specific
let a = "hello ";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "world";
console.log(a, b, c, d);
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(3, 4, "concat");
//be careful
let nextVal = addOrConcat(3, 4, "concat");
// 10 as string;
10;
// dom
const img = document.querySelector("img");
const myImage = document.getElementById("#myImg");
const newImage = document.getElementById("#myImg");
img.src;
myImage.src;
