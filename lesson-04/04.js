/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(string) {
    let arrayOfLetters = string.split('');
    for (let i = 0; i < arrayOfLetters.length; i += 2) {
        arrayOfLetters.splice(i, 0, arrayOfLetters[i]);
    }
    let newString = arrayOfLetters.join('');
    return newString;
}

console.log(doubleEachCharacter('Destination'));