/**
 * ID успешной посылки 45686969
 * 
 * Гоша и Кондратий нашли необычный тренажёр для скоростной печати и хотят освоить его.
 * Тренажёр представляет собой поле из клавиш 4x4, в котором каждый раунд появляется конфигурация цифр и точек.
 * На каждой клавише написана либо точка, либо цифра от 1 до 9.
 * В момент времени t игрок должен одновременно нажать на все клавиши, на которых написана цифра t.
 * Гоша и Кондратий могут нажать в один момент времени на k клавиш каждый.
 * Если в момент времени t были нажаты все нужные клавиши, то игроки получают 1 балл.
 * Найдите число баллов, которое смогут заработать Гоша и Кондратий, если будут нажимать на клавиши вдвоём.
 * 
 * Формат ввода
 * В первой строке дано целое число k, 1 ≤ k ≤ 5.
 * В четырёх следующих строках задан вид тренажёра — по 4 символа в каждой строке.
 * Каждый символ — либо точка, либо цифра от 1 до 9.
 * Символы одной строки идут подряд и не разделены пробелами. 
 * 
 * Формат вывода
 * Выведите единственное число — максимальное количество баллов, которое смогут набрать Гоша и Кондратий.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let k = null;
const array = [];

const getMap = (array) => {
  const map = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    map[item] = map[item] ? map[item] + 1 : 1;
  }

  return map;
}

const getMaximumPoints = (array, k) => {
  let points = 0;
  const map = getMap(array);

  for (let i = 1; i < 10; i++) {
    if ((2 * k) >= map[i]) {
      points = points + 1;
    }
  }

  return points;
}

rl.setPrompt('');
rl.prompt();


rl.on('line', (value) => {
  if (!k) {
    k = parseInt(value, 10);
  } else if (array.length < 12) {
    array.push(...value.split(''));
  } else {
    array.push(...value.split(''));

    const result = getMaximumPoints(array, k);

    console.log(result);
    rl.close();
  }
});
