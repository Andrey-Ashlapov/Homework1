// Задание 1
/*let string = `js`;
string = toUpperCase(string);
*/

// Задание 2
/*
function searchStart (mass, str) {
    let massOut = [];
    mass.forEach((mas) => {
        if (mas.toLowerCase().startsWith(str.toLowerCase())) {
            massOut.push(mas);
        }
    })
    return massOut
}
*/

// Задание 3
/*
let m1 = 32.58884;
console.log(Math.floor(m1));
console.log(Math.ceil(m1));
console.log(Math.round(m1));
*/

// Задание 4
/*
const arr = [52, 53, 49, 77, 21, 32]

console.log(Math.max(arr))
console.log(Math.min(arr))
*/

// Задание 5
/*
console.log(Math.random())
*/

// Задание 6
/*
function arrs (x) {
    let mass = [];
    for (let i = 0; i < Math.round(x); i++) {
        mass.push(Math.round(Math.random()*x))
    }
    return mass;
}
*/

// Задание 7
/*
function res (x, y) {
    let min = Math.min(x, y)
    let max = Math.max(x, y)

    return Math.round(Math.random() * (max - min)) + min;
}
*/

// Задание 8
/*
let myDate = new Date();
console.log(myDate);
*/

// Задание 9
/*
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
console.log(currentDate + days73);
*/

// Задание 10
/*
function date (dats) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    let Date = "Дата: " + dats.getDate() + " " + months[dats.getMonth()] + " " + dats.getFullYear() + " - это" + days[dats.getDay()] + "\nВремя: " + dats.getHours() + ":" + dats.getMinutes() + ":" + dats.getSeconds(); 
    console.log(fullDate);
}
*/