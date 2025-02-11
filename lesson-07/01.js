/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
// using 'split-join'
function capitalizeWords(str) {
    let arr = str.split(' ');
    let result = [];
    arr.map(item => {
        item = item.charAt(0).toUpperCase() + item.slice(1);
        result.push(item);
    })
    return result.join(' ');
}
// using the 'for' loop
// function capitalizeWords(str) {
//     let result ='';
//     let isNewWord = true;
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char !== ' ' && isNewWord) {
//             result += str[i].toUpperCase();
//             isNewWord = false;
//         } else if (char === ' ') {
//             result += char;
//             isNewWord = true;
//         } else {
//             result += char;
//         }
//     }
//     return result;
// }
console.log(capitalizeWords("hello world from javascript"));
