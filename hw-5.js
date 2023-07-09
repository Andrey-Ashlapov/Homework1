//Задание 1
/* 
function comparison(a, b) {
    if (a <= b) {
        console.log(a)
    } else {
        console.log(b)
    };
};
*/

//Задание 2
/* 
function parity(a) {
    if (a % 2 == 0) {
        console.log(`Число четное`)
    } else {
        console.log(`Число нечетное`)
    };
};
*/

//Задание 3
/* 
function squaring(a) {
    console.log(a**2);
};

function squaringReturn(a) {
    return a**2;
};
*/

//Задание 4
/* 
function greeting(){
    let age = prompt(`Сколько тебе лет?`)

    if (age < 0) {
        alert(`Вы ввели неправильное значение`);
        greeting();
    }
    if (age >=0 && age < 12) {
        alert(`Привет, друг!`);
    } 
    if (age >= 13) {
        alert(`Добро пожаловать!`);
    }
}

greeting();
*/

//Задание 5
/*
function checkNan(a, b) {  
    if(isNaN(Number(a)) || isNaN(Number(b))){
        alert(`Одно или оба значения не являются числом`);
        return a ** b;
    }
}
*/

/*
//Задание 6
function Cubing() {
    let number = Number(prompt(`Введите число`));
    if (isNaN(number)) {
        alert(`Переданный параметр не является числом`);
    } else {
        let cub = number**3;
        alert(`${number} в кубе равняется ${cub}`);
    }
    
}

Cubing();
*/