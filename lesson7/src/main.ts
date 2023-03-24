//index signature
interface TransactionObj {
  readonly [index: string]: number;

  Pizza: number;
  Books: number;
  Job: number;
}
// interface TransactionObj {
//   readonly [index: string]: number;
// }

const todayTransaction: TransactionObj = {
  Pizza: -10,
  Books: 99,
  Job: 66,
};
console.log(todayTransaction.Pizza);

let prop: string = "Pizza";
console.log(todayTransaction[prop]);

// count how many transactions of all
const todayNets = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};
console.log(todayNets(todayTransaction));

// todayTransaction.Pizza=100
console.log(todayTransaction["Dantr"]);
interface Student {
  // [key: string]: number | string | number[] | undefined;
  name: string;
  GPA: number;
  class?: number[];
}
const student: Student = {
  name: "dantr",
  GPA: 100,
  class: [100, 287],
};
// console.log(student.test);

for (const key in student) {
  console.log(`${key}:${student[key as keyof Student]}`);
}
Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
  console.log(typeof student);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`student ${key} : ${student[key]}`);
};
logStudentKey(student, "GPA");

// interface Income {
//   [key: string | number]: number;
// }
type Streams = "salary" | "bonus" | "hustle";
type Incomes = Record<Streams, number>;
const monthlyIncome: Incomes = {
  salary: 8090,
  bonus: 82323,
  hustle: 1222,
};
for (const revenue in monthlyIncome) {
  console.log(`${monthlyIncome[revenue as keyof Incomes]}`);
}
