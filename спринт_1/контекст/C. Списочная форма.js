/**
 * Вася просил Аллу помочь решить задачу. На этот раз по информатике.
 * Для неотрицательного целого числа X списочная форма — это массив его цифр слева направо.
 * К примеру, для 1231 списочная форма будет [1,2,3,1].
 * На вход подается количество цифр числа Х, списочная форма неотрицательного числа Х и число K. Числа К и Х не превосходят 10000.
 * 
 * Нужно вернуть списочную форму числа X + K.
 * 
 * Формат ввода
 * В первой строке - длина списочной формы числа X.
 * На следующей строке - сама списочная форма с цифрами записанными через пробел.
 * В последней строке записано число K.
 * 
 * Формат вывода
 * Выведите списочную форму числа X+K.
 * 
 * Примечания
 * Решение должно работать за O(N), где N - максимум из длин двух чисел на входе.
 * Разрешается использовать O(N) дополнительной памяти.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthNumberX = null;
let numberX = null;

const getListForm = (numberX, numberK) => {
  const sum = numberX + numberK;
  const sumString = sum.toString();

  const listForm = [];

  for (let i = 0; i < sumString.length; i++) {
    listForm.push(sumString[i]);
  }

  return listForm.join(' ');
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  if (!lengthNumberX) {
    lengthNumberX = parseInt(value, 10);
  } else if (!numberX) {
    const stringX = value.split(' ').join('');
    numberX = parseInt(stringX, 10);
  } else {
    const numberK = parseInt(value, 10);
    const result = getListForm(numberX, numberK);

    console.log(result);
    rl.close();
  }
});
