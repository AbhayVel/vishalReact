
let fulldata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rowData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
fulldata.sort((a,b) => {
	return a > b ? -1:1;
});

console.log(fulldata);

fulldata.sort((a, b) => {
	return a > b ? 1 : -1;
});

console.log(fulldata);

rowData=fulldata.filter((a) => {
	return a > 5;
});

console.log(rowData);
rowData = fulldata.filter((a) => {
	return a < 5;
});
console.log(rowData);

//self change-> sort, push ,  pop, shift , unshift ,splice ....
// return diffrent array-> filter , map ,slice 	, find
//scalar value -> 	findIndex, reduce, 