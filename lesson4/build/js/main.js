"use strict";
let myname;
let username;
//funtions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello world");
logMsg("Hello world");
logMsg(add(10, 9));
// console.log(add(9, 8));
let substract = (c, d) => {
    return c - d;
};
let mutiply = function (c, d) {
    return c * d;
};
logMsg(mutiply(4, 8));
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default value
const sumAll = (a = 99, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 7, 9));
logMsg(addAll(1, 7));
logMsg(sumAll(undefined, 7));
//rest params
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 7, 9));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const createNumberORString = (value) => {
    if (typeof value === "string") {
        return "String";
    }
    if (typeof value === "number") {
        return "Number";
    }
    return createError("this should never happen !");
};
logMsg(createNumberORString("9"));
