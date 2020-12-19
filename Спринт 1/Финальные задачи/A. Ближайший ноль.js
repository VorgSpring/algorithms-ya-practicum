/**
 * ID успешной посылки 45685120
 * 
 * Улица, на которой хочет жить Тимофей, имеет длину n, то есть состоит из n одинаковых идущих подряд участков.
 * На каждом участке либо уже построен дом, либо участок пустой. Тимофей ищет место для строительства своего дома.
 * Тимофей очень общителен и не хочет жить далеко от знакомых, которых у него вся улица.
 * Чтобы оптимально выбрать место для строительства, он хочет для каждого участка знать расстояние до ближайшего пустого участка.
 * (Для пустого участка эта величина будет равна нулю — расстояние до самого себя.)
 * Ваша задача — помочь Тимофею посчитать искомые расстояния. Для этого у вас есть карта улицы.
 * Дома в городе Тимофея нумеровались в том порядке, в котором строились, поэтому их номера на карте никак не упорядочены.
 * Пустые участки обозначены нулями.
 * 
 * Формат ввода
 * В первой строке дана длина улицы — n (1 ≤ n ≤ 10^6).
 * В следующей строке записаны n целых неотрицательных чисел — номера домов и обозначения пустых участков на карте (нули).
 * Гарантируется, что в последовательности есть хотя бы один ноль.
 * Номера домов (положительные числа) уникальны и не превосходят 10^9.
 * 
 * Формат вывода
 * Для каждого из участков выведите расстояние до ближайшего нуля. Числа выводите в одну строку, разделяя их пробелами.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthArray = null;

const getDistanceToNearestZero = (array) => {
  const preparedArray = [];
  let increment = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '0') {
      increment = 0;
    }

    preparedArray[i] = increment;

    if (increment === null) {
      continue;
    }

    increment++;
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === '0') {
      increment = 0;
    }

    if (preparedArray[i] && (preparedArray[i] <= increment)) {
      continue;
    }

    preparedArray[i] = increment;
    increment++;
  }

  return preparedArray.join(' ');
}

rl.setPrompt('');
rl.prompt();


rl.on('line', (value) => {
  if (!lengthArray) {
    lengthArray = value;
  } else {
    const array = value.split(' ');

    const result = getDistanceToNearestZero(array);

    console.log(result);
    rl.close();
  }
});
