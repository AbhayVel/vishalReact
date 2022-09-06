

const data = [2, () => { console.log("I am in fun") }];
//const val1 = data[0];
//const val2 = data[1];
//const val3 = data[2];

const [val1, val2, val3] = data;

console.log(val1);
val2();
console.log(val3);

