function month() {
    let number = Number(prompt(`Введите номер месяца`));
    if (isNaN(number)) {
        alert(`Переданный параметр не является числом`);
    } else {  
        switch (number) {
            case 1:
            case 2:
            case 12:
                alert(`Зима`);
                break;
            case 3:
            case 4:
            case 5:
                alert(`Весна`);
                break;
            case 6:
            case 7:
            case 8:
                alert(`Лето`);
                break;
            case 9:
            case 10:
            case 11:
                alert(`Осень`);
                break;
            default:
                alert(`У нас нету столько месяцов`)
                break;
        }
    }
}