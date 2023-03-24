"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript ") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
const dantr = new Coder("huynh", "edm", 22);
console.log(dantr.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i Write ${this.lang}`;
    }
}
const Sare = new WebDev("mac", "sare", "rock", 97);
console.log(Sare.getLang());
class Guitarist {
    constructor(name, intrument) {
        this.name = name;
        this.intrument = intrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.intrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("drum"));
// //////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps("John");
const dick = new Peeps("dick");
const lonra = new Peeps("lonra");
// const enmy = new Peeps("enmy");
console.log(john.id);
console.log(Peeps.count);
// /////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Params not is an array");
    }
}
const myBand = new Bands();
myBand.data = ["nigga", "man"];
console.log(myBand.data);
myBand.data=[...myBand.data,"bigbang"];
console.log(myBand.data);
myBand.data=["hello ",873]
console.log(myBand.data)