/**
 * Руководство компании, где работают Гоша с друзьями, подарило каждому сотруднику два талона на обед в близлежащем ресторане.
 * Сотрудники могли взять талоны и записать номер своего бейджика на каждом из них.
 * Талон с записанным на нём номером обменивается на обед в ресторане.
 * Все сотрудники, кроме одного, сходили в ресторан по талонам дважды.
 * Отличившийся сотрудник сходил в ресторан только один раз.
 * Нужно вычислить, кто же это такой.
 * По списку номеров на сданных в ресторан талонах найдите номер отличившегося сотрудника.
 * 
 * Формат ввода
 * На вход подаётся число номеров в списке — n (3 ≤ n ≤ 10^4), и n натуральных чисел, не превышающих M=10^4, — сам список номеров сотрудников.
 * Все числа, кроме одного, встречаются в списке дважды. 
 * 
 * Формат вывода
 * Выведите номер сотрудника, который сходил на обед всего один раз.
 * 
 * Примечание
 * Эту задачу можно решить за O(n) времени и O(1) дополнительной памяти — подумайте, как это сделать!
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthArray = null;

const findSingleElement = (array) => {
  if (array.length === 0) {
    return '';
  }

  const map = {};

  array.forEach(item => {
    if (map[item]) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  });

  return Object.keys(map)
    .filter(item => map[item] === 1)
    .join(' ');
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  if (!lengthArray) {
    lengthArray = parseInt(value, 10);
  } else {
    const array = value.split(' ').map(
      item => parseInt(item, 10)
    );

    const result = findSingleElement(array);

    console.log(result);
    rl.close();
  }
});