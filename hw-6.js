//Задание 1
/*
let mass = [1, 5, 4, 10, 0, 3];
for (let el of mass) {
	console.log(el);
    if (el===10) {
        break;
    }
}
*/

//Задание 2
/*
let mass = [1, 5, 4, 10, 0, 3];
console.log( mass.indexOf(4) );
*/

//Задание 3
/*
let mass = [1, 3, 5, 10, 20];
console.log(mass.join(' '));
*/

//Задание 4
/*
let mass = [];
let i = 0;
for (let i = 0; i < 3; i++) {
	mass[i] = [];
	
	for (let j = 0; j < 3; j++) {
		mass[i].push(1);
	}
}
*/

//Задание 5
/*
let mass = [1, 1, 1,];
for (let i = 0; i < 3; i++) {
    mass.push(2);
}
*/

//Задание 7
/*
let mass = [9, 8, 7, 6, 5];
let number = prompt(`Введите число`);
let numberMass = mass.indexOf(number);
if (numberMass === -1){
    alert(`Не угадал`);
} else {
    alert(`Угадал`);
};
*/

//Задание 6
/*
let mass = [9, 8, 7, 'a', 6, 5];
mass.sort();
mass.pop();
console.log(mass);
*/

//Задание 8
/*
let stroc = 'abcdef';
let strocs = stroc.split('').map(u => u.trim());
console.log(strocs.reverse());
*/

//Задание 9
/*
let mass1 = [[1, 2, 3],[4, 5, 6]];
let mass2 = [];
for (i = 1; i < mass1.length; i++) {
    mass2 = mass1[i-1].concat(mass1[i]);
}
console.log(mass2);
*/

//Задание 10
/*
let mass1 = [1, 5, 10, 11 ,6 , 2, 4, 7, 21, 3]
let mass2 = [];
for (i = 0; i + 1 < mass1.length; i++){
    console.log(mass1[i] + mass1[i + 1]);
}
*/

//Задание 11
/*
function massMath (a){
    let mass = a.map(item => item**2);
    return mass;
};
*/

//Задание 12
/*
function massMath (a){
    let mass = a.map(item => item.length);
    return mass;
}
*/

//Задание 13
/*
function filterPositive(array) {
    for (i = 0; i < array.length; i++){
        if (array[i] >= 0) {
            array.splice(i,1);
            i--;
        }
    }
}
  
  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2]);
  */
