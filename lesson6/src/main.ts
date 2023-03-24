class Coder {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript "
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `Hello I'm ${this.age}`;
  }
}

const dantr = new Coder("huynh", "edm", 22);
console.log(dantr.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `i Write ${this.lang}`;
  }
}
const Sare = new WebDev("mac", "sare", "rock", 97);
console.log(Sare.getLang());
// console.log(Sare.age)
// console.log(Sare.lang)

interface Musician {
  name: string;
  intrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  intrument: string;
  constructor(name: string, intrument: string) {
    this.name = name;
    this.intrument = intrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.intrument}`;
  }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("drum"));
// //////////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("John");
const dick = new Peeps("dick");
const lonra = new Peeps("lonra");
// const enmy = new Peeps("enmy");
console.log(john.id);
console.log(Peeps.count);
// /////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Params not is an array");
  }
}
const myBand = new Bands();
myBand.data = ["nigga", "man"];
console.log(myBand.data);
