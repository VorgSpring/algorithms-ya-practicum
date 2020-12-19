/**
 * Метеорологическая служба вашего города решила измерять нестабильность погоды новым способом.
 * Назовём хаотичностью погоды за n дней число дней, в которые температура строго больше, чем в день до (если такой существует) и в день после текущего (если такой существует).
 * Например, если за 5 дней температура воздуха составляла 1 2 5 4 8 градусов, то хаотичность за этот период равна 2: в 3-й и 5-й дни выполнялись описанные условия.
 * Определите по ежедневным показаниям температуры хаотичность погоды за этот период. 
 * 
 * Формат ввода
 * В первой строке дано число n — длина периода измерений в днях, 1 ≤ n ≤ 10^5.
 * Во второй строке даны n целых чисел — значения температуры в каждый из n дней.
 * Значения температуры не превосходят 273 по модулю. 
 * 
 * Формат вывода
 * Выведите единственное число — хаотичность за данный период.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthArray = null;

const isIncreased = (item, array, index) => (
  (array.length === 1) ||
  (index === 0 && item > array[index + 1]) ||
  (index === (array.length - 1) && item > array[index - 1]) ||
  (item > array[index - 1] && item > array[index + 1])
);

const getNumberOfChaos = (array) => array.reduce(
  (acc, item, index) => {
    const increment = isIncreased(item, array, index) ? 1 : 0;
    return acc + increment;
  }, 0
);

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  if (!lengthArray) {
    lengthArray = parseInt(value, 10);
  } else {
    const array = value.split(' ').map(
      item => parseInt(item, 10)
    );

    const result = getNumberOfChaos(array);

    console.log(result);
    rl.close();
  }
});
