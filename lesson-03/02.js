// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
function isEven(number) {
    let evenNumber = (number % 2 === 0) ? true : false;
    return evenNumber;
}

