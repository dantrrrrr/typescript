let stringArr = ["one", "two", "three"];

let guitars = ["start", "classic", "acoutis", 9878];

let mixedData = ["dantr", 981, true];
stringArr[0] = "dantr";
stringArr.push("dantr hello ");
guitars[0] = 987;
guitars.unshift("jim");
let test = [];
let bands: string[] = [];

//tuple
let myTuples: [string, number, boolean] = ["dantr", 2839, true];

let mixed = ["john", 1, false];
mixed = myTuples;
myTuples[1] = 982;
// object
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
  prop1: "dantr",
  prop2: true,
};
exampleObj.prop2 = false;
//////----------------------------------------------------------------

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};
let evh: Guitarist = {
  name: "dantr",
  active: true,
  albums: ["new", "old", 6969],
};
let jb: Guitarist = {
  name: "hndt",
  active: false,
  albums: ["cu", "moi", 879, 978],
};
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return "hello undefined";
};
console.log(greetGuitarist(evh));
// console.log(greetGuitarist(jb));

//enums
enum Grade {
  U=3,
  D,
  C,
  B,
  A,
}
console.log(Grade.U)
