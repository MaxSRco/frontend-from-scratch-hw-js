/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы
 из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно,
 она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    let uniqueElements = [];
    let seenValues = [];

    for (let i = 0; i < array.length; i++) {
        if (!seenValues[array[i]]) {
            seenValues[array[i]] = true;
            uniqueElements.push(array[i]);
        }
    }
    return uniqueElements;
}

function findCommonElements(array1, array2) {
   let identical = [];
   let resultArray = [];

   for (let i = 0; i < array1.length; i++) {
       for (let j = 0; j < array2.length; j++) {
           if (array1[i] === array2[j]) {
                identical.push(array1[i]);
           }
       }
        resultArray = findUniqueElements(identical);
   }
    return resultArray;
}

console.log(findCommonElements([1,2,3,4,3,5], [3, 1, 5, 7, 2, 6, 9, 0]));