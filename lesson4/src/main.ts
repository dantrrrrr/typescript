type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};
type UserId = stringOrNumber;

let myname: "dantr";

let username: "dantr" | "rtr" | "unknow";

//funtions
const add = (a: number, b: number): number => {
  return a + b;
};
const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("Hello world");
logMsg("Hello world");
logMsg(add(10, 9));
// console.log(add(9, 8));
let substract = (c: number, d: number): number => {
  return c - d;
};
type MathFunction = (a: number, b: number) => number;
let mutiply: MathFunction = function (c, d) {
  return c * d;
};
logMsg(mutiply(4, 8));
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

//default value

const sumAll = (a: number = 99, b: number, c: number = 2): number => {
  return a + b + c;
};
logMsg(addAll(1, 7, 9));
logMsg(addAll(1, 7));
logMsg(sumAll(undefined, 7));

//rest params

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(2, 7, 9));
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const createNumberORString = (value: string | number): string => {
  if (typeof value === "string") {
    return "String";
  }
  if (typeof value === "number") {
    return "Number";
  }
  return createError("this should never happen !");
};
logMsg(createNumberORString("9"));
