"use strict";
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const todayTransaction = {
    Pizza: -10,
    Books: 99,
    Job: 66,
};
console.log(todayTransaction.Pizza);
let prop = "Pizza";
console.log(todayTransaction[prop]);
// count how many transactions of all
const todayNets = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNets(todayTransaction));
// todayTransaction.Pizza=100
console.log(todayTransaction["Dantr"]);
const student = {
    name: "dantr",
    GPA: 100,
    class: [100, 287],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}:${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
    console.log(typeof student);
});
const logStudentKey = (student, key) => {
    console.log(`student ${key} : ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncome = {
    salary: 8090,
    bonus: 82323,
    hustle: 1222,
};
for (const revenue in monthlyIncome) {
    console.log(`${monthlyIncome[revenue]}`);
}
