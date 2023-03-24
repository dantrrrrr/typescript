type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific

let a: One = "hello ";
let b = a as Two; //less specific
let c = a as Three; //more specific
let d = <One>"world";
let e = <string | number>"world";

console.log(a, b, c, d);

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};
let myVal: string = addOrConcat(3, 4, "concat") as string;
//be careful
let nextVal: number = addOrConcat(3, 4, "concat") as number;
// 10 as string;
10 as unknown as string;
// dom

const img = document.querySelector("img")!;
const myImage = document.getElementById("#myImg") as HTMLImageElement;
const newImage = <HTMLImageElement>document.getElementById("#myImg");

img.src;
myImage.src;
